"use client"

import { createBrowserClient } from "@supabase/ssr"

import { getSupabaseConfig } from "./config"

type BrowserClient = ReturnType<typeof createBrowserClient>

let browserClient: BrowserClient | undefined

export function createClient() {
  if (!browserClient) {
    const { url, anonKey } = getSupabaseConfig()

    browserClient = createBrowserClient(url, anonKey)
  }

  return browserClient
}
