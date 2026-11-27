import type { Metadata } from "next"

import ResetPasswordForm from "@/components/ResetPasswordForm"

export const metadata: Metadata = {
  title: "Reset Password | ChurchQuest",
}

export default function ResetPasswordPage() {
  return <ResetPasswordForm />
}
