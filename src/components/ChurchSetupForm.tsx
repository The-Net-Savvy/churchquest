"use client"

import { useState, type FormEvent } from "react"

import { saveChurchProfile, type ChurchProfile } from "@/lib/church-profile"

import { createClient } from "@/lib/supabase/client"

import styles from "./AuthPage.module.css"

type ChurchSetupFormProps = {
  initialProfile: ChurchProfile
}

export default function ChurchSetupForm({
  initialProfile,
}: ChurchSetupFormProps) {
  const [status, setStatus] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus(null)

    const formData = new FormData(event.currentTarget)

    const logo = formData.get("churchLogo")

    if (!(logo instanceof File) || logo.size === 0) {
      setStatus("Choose a church logo to finish setting up your account.")

      return
    }

    if (logo.size > 5 * 1024 * 1024) {
      setStatus("Your logo must be 5 MB or smaller.")

      return
    }

    if (!["image/png", "image/jpeg", "image/webp"].includes(logo.type)) {
      setStatus("Choose a PNG, JPG, or WebP image.")

      return
    }

    setIsSubmitting(true)

    try {
      const supabase = createClient()

      await saveChurchProfile(
        supabase,

        {
          churchName: String(formData.get("churchName") ?? ""),

          churchAddress: String(formData.get("churchAddress") ?? ""),

          churchEmail: String(formData.get("churchEmail") ?? ""),

          superAdminUsername: String(
            formData.get("superAdminUsername") ?? "",
          ),
        },

        logo,
      )

      window.location.assign("/dashboard")
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Church setup failed. Please try again.",
      )

      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.setupCard} aria-labelledby="setup-heading">
      <div className={styles.formIntro}>
        <h1 id="setup-heading">Set up your church</h1>
        <p>
          Add your church details to finish creating your Super Admin dashboard.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.setupField}>
          <span>Church name</span>
          <input
            name="churchName"
            autoComplete="organization"
            defaultValue={initialProfile.churchName}
            maxLength={160}
            required
          />
        </label>

        <label className={styles.setupField}>
          <span>Church address</span>
          <input
            name="churchAddress"
            autoComplete="street-address"
            defaultValue={initialProfile.churchAddress}
            maxLength={500}
            required
          />
        </label>

        <label className={styles.setupField}>
          <span>Church email</span>
          <input
            name="churchEmail"
            type="email"
            autoComplete="email"
            defaultValue={initialProfile.churchEmail}
            maxLength={254}
            required
          />
        </label>

        <label className={styles.setupField}>
          <span>Super Admin username</span>
          <input
            name="superAdminUsername"
            autoComplete="username"
            defaultValue={initialProfile.superAdminUsername}
            minLength={3}
            maxLength={30}
            pattern="[A-Za-z0-9._-]{3,30}"
            title="Use 3–30 letters, numbers, periods, underscores, or hyphens."
            required
          />
        </label>

        <label className={styles.logoField}>
          <span>Church logo</span>
          <input
            name="churchLogo"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            required
          />
          <small>PNG, JPG, or WebP. Maximum file size: 5 MB.</small>
        </label>

        {status && (
          <p className={styles.status} role="alert">
            {status}
          </p>
        )}

        <button
          className={styles.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving church details…" : "Finish setup"}
        </button>
      </form>
    </section>
  )
}
