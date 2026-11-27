import { createServerClient } from "@supabase/ssr"

import { cookies } from "next/headers"

import { NextResponse } from "next/server"

import { getSupabaseConfig } from "@/lib/supabase/config"

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)

  const code = requestUrl.searchParams.get("code")

  const requestedPath = requestUrl.searchParams.get("next")

  const nextPath =
    requestedPath?.startsWith("/") && !requestedPath.startsWith("//")
      ? requestedPath
      : "/dashboard"

  if (!code) {
    return NextResponse.redirect(
      new URL("/auth?error=missing_code", requestUrl),
    )
  }

  const { url, anonKey } = getSupabaseConfig()

  const cookieStore = await cookies()

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },

      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookieStore.set(name, value, options)
        })
      },
    },
  })

  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    return NextResponse.redirect(
      new URL("/auth?error=callback_failed", requestUrl),
    )
  }

  return NextResponse.redirect(new URL(nextPath, requestUrl))
}
