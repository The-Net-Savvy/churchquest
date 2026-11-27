"use client"

import { useEffect, useState } from "react"

import ChurchSetupForm from "@/components/ChurchSetupForm"

import type { ChurchProfile } from "@/lib/church-profile"

import { createClient } from "@/lib/supabase/client"

import styles from "./AuthPage.module.css"

type DashboardState =
  | { kind: "loading" }
  | SetupDashboardState
  | ReadyDashboardState
  | ErrorDashboardState

type SetupDashboardState = {
  kind: "setup"
  profile: ChurchProfile
}

type ReadyDashboardState = {
  kind: "ready"
  profile: ChurchProfile
  logoUrl: string
}

type ErrorDashboardState = {
  kind: "error"
  message: string
}

function readString(value: unknown) {
  return typeof value === "string" ? value : ""
}

function profileFromMetadata(metadata: Record<string, unknown>, email: string) {
  const pending = metadata.pending_church_profile

  const details =
    pending && typeof pending === "object"
      ? pending as Record<string, unknown>
      : {}

  return {
    churchName: readString(details.church_name),

    churchAddress: readString(details.church_address),

    churchEmail: readString(details.church_email) || email,

    superAdminUsername:
      readString(details.super_admin_username) ||
      readString(metadata.user_name) ||
      readString(metadata.preferred_username) ||
      email.split("@")[0],
  }
}

export default function ChurchDashboard() {
  const [state, setState] = useState<DashboardState>({ kind: "loading" })

  const [signOutError, setSignOutError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    async function loadDashboard() {
      try {
        const supabase = createClient()

        const {
          data: { user },

          error: userError,
        } = await supabase.auth.getUser()

        if (userError) {
          throw userError
        }

        if (!user) {
          window.location.replace("/auth")

          return
        }

        const { data: membership, error: membershipError } = await supabase

          .from("church_members")

          .select("church_id, username")

          .eq("user_id", user.id)

          .maybeSingle()

        if (membershipError) {
          throw membershipError
        }

        if (!membership) {
          if (active) {
            setState({
              kind: "setup",

              profile: profileFromMetadata(
                user.user_metadata,

                user.email ?? "",
              ),
            })
          }

          return
        }

        const { data: church, error: churchError } = await supabase

          .from("churches")

          .select("id, name, address, email, logo_path, onboarding_complete")

          .eq("id", membership.church_id)

          .single()

        if (churchError) {
          throw churchError
        }

        const profile = {
          churchName: church.name,

          churchAddress: church.address,

          churchEmail: church.email,

          superAdminUsername: membership.username,
        }

        if (!church.onboarding_complete || !church.logo_path) {
          if (active) {
            setState({ kind: "setup", profile })
          }

          return
        }

        const { data: logo } = supabase.storage

          .from("church-logos")

          .getPublicUrl(church.logo_path)

        if (active) {
          setState({ kind: "ready", profile, logoUrl: logo.publicUrl })
        }
      } catch (error) {
        if (active) {
          setState({
            kind: "error",

            message:
              error instanceof Error
                ? error.message
                : "We couldn’t load your dashboard.",
          })
        }
      }
    }

    void loadDashboard()

    return () => {
      active = false
    }
  }, [])

  async function handleSignOut() {
    setSignOutError(null)

    try {
      const { error } = await createClient().auth.signOut()

      if (error) {
        throw error
      }

      window.location.assign("/auth")
    } catch (error) {
      setSignOutError(
        error instanceof Error ? error.message : "Unable to sign out.",
      )
    }
  }

  if (state.kind === "loading") {
    return <main className={styles.dashboardPage}>Loading your dashboard…</main>
  }

  return (
    <main className={styles.dashboardPage}>
      <header className={styles.dashboardHeader}>
        <a className={styles.dashboardBrand} href="/">
          ChurchQuest
        </a>
        <button
          className={styles.dashboardSignOut}
          type="button"
          onClick={handleSignOut}
        >
          Sign out
        </button>
      </header>

      {signOutError && (
        <p className={styles.status} role="alert">
          {signOutError}
        </p>
      )}

      {state.kind === "setup" && (
        <ChurchSetupForm initialProfile={state.profile} />
      )}

      {state.kind === "ready" && (
        <section className={styles.dashboardCard}>
          <img
            className={styles.dashboardLogo}
            src={state.logoUrl}
            alt={`${state.profile.churchName} logo`}
          />
          <p className={styles.dashboardEyebrow}>Super Admin dashboard</p>
          <h1>Welcome to {state.profile.churchName}</h1>
          <p>{state.profile.churchAddress}</p>
          <p>{state.profile.churchEmail}</p>
          <p>
            Signed in as <strong>{state.profile.superAdminUsername}</strong>
          </p>
          <p className={styles.dashboardNote}>
            Your account and church profile are connected. Dashboard tools can
            be added here.
          </p>
        </section>
      )}

      {state.kind === "error" && (
        <section className={styles.dashboardCard}>
          <h1>Dashboard unavailable</h1>
          <p role="alert">{state.message}</p>
        </section>
      )}
    </main>
  )
}
