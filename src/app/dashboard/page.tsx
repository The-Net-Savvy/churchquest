import type { Metadata } from "next"

import DashboardPage from "@/components/DashboardPage"

export const metadata: Metadata = {
  title: "Dashboard | ChurchQuest",
}

export default function DashboardRoute() {
  return <DashboardPage />
}
