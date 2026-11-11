import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

const title = "ChurchQuest"
const description =
  "A church management platform that helps ministries track members, donations, attendance, and events to build more connected, engaged congregations."

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/favicon.svg" },
  // Keeps the site out of search engines. Remove this and src/app/robots.ts at launch.
  robots: { index: false, follow: false },
  openGraph: { title, description },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
