"use client"

import Link from "next/link"

import { useState, type FormEvent, type SVGProps } from "react"

import styles from "./AuthPage.module.css"

type IconProps = SVGProps<SVGSVGElement>

type AuthMode = "signIn" | "createAccount"

function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="5"
        y="10"
        width="14"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10V7a4 4 0 1 1 8 0v3m-4 4v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PersonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 20v-1a7 7 0 0 1 14 0v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EyeIcon({
  hidden = false,
  ...props
}: IconProps & { hidden?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      {hidden ? (
        <>
          <path
            d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.5 0 9 7 9 7a15 15 0 0 1-3.1 3.8M6.2 6.2C3.9 7.7 3 12 3 12s3.5 7 9 7c.8 0 1.6-.2 2.3-.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        <>
          <path
            d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </>
      )}
    </svg>
  )
}

function CrossIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PeopleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="8" r="3" fill="currentColor" />
      <circle cx="17" cy="9" r="2.5" fill="currentColor" />
      <path
        d="M3.5 19a5.5 5.5 0 0 1 11 0m1-4a4.5 4.5 0 0 1 5 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="m12 20-1.4-1.3C5.5 14 2 10.8 2 7a5 5 0 0 1 8.5-3.5L12 5l1.5-1.5A5 5 0 0 1 22 7c0 3.8-3.5 7-8.6 11.7L12 20Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("signIn")

  const [showPassword, setShowPassword] = useState(false)

  const [status, setStatus] = useState<string | null>(null)

  const isSignIn = mode === "signIn"

  function changeMode(nextMode: AuthMode) {
    setMode(nextMode)

    setStatus(null)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (
      !isSignIn &&
      formData.get("password") !== formData.get("confirmPassword")
    ) {
      setStatus("Those passwords don’t match. Please try again.")

      return
    }

    setStatus(
      isSignIn
        ? "Sign-in isn’t connected yet. Add an authentication provider to enable access."
        : "Account creation isn’t connected yet. Add an authentication provider to get started.",
    )
  }

  return (
    <main className={styles.authPage}>
      <div className={styles.scenery} aria-hidden="true">
        <div className={styles.sunGlow} />
        <div className={styles.clouds} />
        <div className={styles.hillTop} />
        <div className={styles.hillBottom} />
        <svg
          className={styles.church}
          viewBox="0 0 380 280"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <path d="M23 263h344" stroke="#07386E" strokeWidth="8" />
          <path
            d="M112 263v-96l78-54 78 54v96H112Z"
            fill="#07549C"
            stroke="#0A4384"
            strokeWidth="5"
          />
          <path
            d="m100 168 90-68 90 68"
            fill="#0B4384"
            stroke="#07386E"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M157 128V75l33-34 33 34v53"
            fill="#07549C"
            stroke="#0A4384"
            strokeWidth="5"
          />
          <path d="m150 78 40-43 40 43" fill="#07386E" />
          <path
            d="M190 13v36m-12-24h24"
            stroke="#D8F4FF"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M169 263v-52a21 21 0 0 1 42 0v52"
            fill="#F5C77C"
            stroke="#07386E"
            strokeWidth="5"
          />
          <path d="M178 219h24m-12-13v47" stroke="#FFF1C9" strokeWidth="4" />
          <path
            d="M128 183h20v31h-20zm104 0h20v31h-20z"
            fill="#F5C77C"
            stroke="#07386E"
            strokeWidth="5"
          />
          <path d="M138 184v30m104-30v30" stroke="#FFF1C9" strokeWidth="3" />
          <path
            d="M25 263c20-27 35-27 54 0m205 0c18-30 38-30 61 0"
            stroke="#0A3970"
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className={styles.content}>
        <section className={styles.story} aria-labelledby="welcome-heading">
          <Link className={styles.logo} href="/" aria-label="ChurchQuest home">
            <span className={styles.logoMark}>
              <CrossIcon />
            </span>
            <span>ChurchQuest</span>
          </Link>

          <div className={styles.storyCopy}>
            <h2 id="welcome-heading">
              Welcome Back!
              <span>Continue Your</span>
              <strong>Church Journey</strong>
            </h2>
            <p>
              Sign in to access your dashboard,
              <br className={styles.desktopBreak} /> track your progress and
              stay connected.
            </p>
          </div>

          <ul className={styles.values}>
            <li>
              <span className={styles.valueIcon}>
                <CrossIcon />
              </span>
              <span>
                Grow
                <br />
                in Faith
              </span>
            </li>
            <li>
              <span className={styles.valueIcon}>
                <PeopleIcon />
              </span>
              <span>
                Connect
                <br />
                with Others
              </span>
            </li>
            <li>
              <span className={styles.valueIcon}>
                <HeartIcon />
              </span>
              <span>
                Serve
                <br />
                Together
              </span>
            </li>
          </ul>
        </section>

        <section className={styles.card} aria-labelledby="auth-heading">
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Account access"
          >
            <button
              id="sign-in-tab"
              type="button"
              role="tab"
              aria-selected={isSignIn}
              aria-controls="auth-form"
              className={isSignIn ? styles.activeTab : ""}
              onClick={() => changeMode("signIn")}
            >
              <PersonIcon />
              Sign In
            </button>
            <button
              id="create-account-tab"
              type="button"
              role="tab"
              aria-selected={!isSignIn}
              aria-controls="auth-form"
              className={!isSignIn ? styles.activeTab : ""}
              onClick={() => changeMode("createAccount")}
            >
              <PeopleIcon />
              Create Account
            </button>
          </div>

          <div className={styles.formIntro}>
            <h1 id="auth-heading">{isSignIn ? "Sign In" : "Create Account"}</h1>
            <p>
              {isSignIn
                ? "Welcome back! Please enter your details to continue."
                : "Join your church community. Enter your details to get started."}
            </p>
          </div>

          <form
            id="auth-form"
            className={styles.form}
            onSubmit={handleSubmit}
            aria-labelledby={isSignIn ? "sign-in-tab" : "create-account-tab"}
          >
            {!isSignIn && (
              <label className={styles.field}>
                <span className={styles.fieldIcon}>
                  <PersonIcon />
                </span>
                <span className={styles.srOnly}>Full name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  autoComplete="name"
                  required
                />
              </label>
            )}

            <label className={styles.field}>
              <span className={styles.fieldIcon}>
                <MailIcon />
              </span>
              <span className={styles.srOnly}>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                autoComplete="email"
                required
              />
            </label>

            <label className={styles.field}>
              <span className={styles.fieldIcon}>
                <LockIcon />
              </span>
              <span className={styles.srOnly}>Password</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                autoComplete={isSignIn ? "current-password" : "new-password"}
                minLength={8}
                required
              />
              <button
                className={styles.passwordToggle}
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                <EyeIcon hidden={showPassword} />
              </button>
            </label>

            {!isSignIn && (
              <label className={styles.field}>
                <span className={styles.fieldIcon}>
                  <LockIcon />
                </span>
                <span className={styles.srOnly}>Confirm password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                />
              </label>
            )}

            {isSignIn && (
              <div className={styles.formOptions}>
                <label className={styles.remember}>
                  <input type="checkbox" name="remember" defaultChecked />
                  <span>Remember me</span>
                </label>
                <button
                  className={styles.textButton}
                  type="button"
                  onClick={() =>
                    setStatus(
                      "Password reset isn’t connected yet. Add an authentication provider to enable recovery.",
                    )
                  }
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {status && (
              <p className={styles.status} role="status">
                {status}
              </p>
            )}

            <button className={styles.submitButton} type="submit">
              {isSignIn ? "Sign In" : "Create Account"}
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className={styles.divider}>
            <span />
            <p>or continue with</p>
            <span />
          </div>

          <div className={styles.providers}>
            <button
              type="button"
              onClick={() => setStatus("Google sign-in isn’t configured yet.")}
            >
              <span className={styles.googleIcon}>G</span>
              Google
            </button>
            <button
              type="button"
              onClick={() => setStatus("Apple sign-in isn’t configured yet.")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.4 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.8c-1.5 0-2.9.9-3.6 2.3-1.5 2.7-.4 6.8 1.1 9.1.7 1.1 1.5 2.3 2.6 2.2 1-.1 1.4-.7 2.7-.7s1.6.7 2.8.7c1.2 0 1.9-1.1 2.6-2.2.8-1 1.1-2.1 1.1-2.2-.1 0-2-.8-2-4.3ZM14.3 6.5c.6-.8 1-1.8.9-2.8-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.7 1 0 2-.5 2.7-1.3Z"
                />
              </svg>
              Apple
            </button>
            <button
              type="button"
              onClick={() =>
                setStatus("Microsoft sign-in isn’t configured yet.")
              }
            >
              <span className={styles.microsoftIcon} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
              Microsoft
            </button>
          </div>

          <p className={styles.accountPrompt}>
            {isSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => changeMode(isSignIn ? "createAccount" : "signIn")}
            >
              {isSignIn ? "Create one here" : "Sign in"}
            </button>
          </p>
        </section>
      </div>
    </main>
  )
}
