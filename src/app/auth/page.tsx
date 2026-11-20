import type { Metadata } from "next"

import AuthPage from "@/components/AuthPage"

export const metadata: Metadata = {
  title: "Sign In | ChurchQuest",
}

export default function AuthRoute() {
  return <AuthPage />
}
