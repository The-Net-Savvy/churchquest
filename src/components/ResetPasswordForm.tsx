"use client"

import { useState, type FormEvent } from "react"

import { createClient } from "@/lib/supabase/client"

import styles from "./AuthPage.module.css"

export default function ResetPasswordForm() {
  const [status, setStatus] = useState<string | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus(null)

    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)

    const password = String(formData.get("password") ?? "")

    const confirmation = String(formData.get("confirmPassword") ?? "")

    if (password !== confirmation) {
      setStatus("Those passwords don’t match. Please try again.")

      setIsSubmitting(false)

      return
    }

    try {
      const { error } = await createClient().auth.updateUser({ password })

      if (error) {
        throw error
      }

      setStatus("Your password has been updated. You can now sign in.")
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Unable to update your password.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.setupPage}>
      <section className={styles.setupCard} aria-labelledby="reset-heading">
        <div className={styles.formIntro}>
          <h1 id="reset-heading">Reset your password</h1>
          <p>Choose a new password for your ChurchQuest account.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.setupField}>
            <span>New password</span>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>
          <label className={styles.setupField}>
            <span>Confirm new password</span>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </label>
          {status && (
            <p className={styles.status} role="status">
              {status}
            </p>
          )}
          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating…" : "Update password"}
          </button>
        </form>
      </section>
    </main>
  )
}
