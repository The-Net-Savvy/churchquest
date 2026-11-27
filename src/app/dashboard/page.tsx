import type { Metadata } from "next"

import ChurchDashboard from "@/components/ChurchDashboard"

export const metadata: Metadata = {
  title: "Dashboard | ChurchQuest",
}

export default function DashboardPage() {
  return <ChurchDashboard />
}
