import type { SupabaseClient } from "@supabase/supabase-js"

export type ChurchProfile = {
  churchName: string

  churchAddress: string

  churchEmail: string

  superAdminUsername: string
}

const logoExtensions: Record<string, string> = {
  "image/jpeg": "jpg",

  "image/png": "png",

  "image/webp": "webp",
}

export async function saveChurchProfile(
  supabase: SupabaseClient,

  profile: ChurchProfile,

  logo: File,
) {
  const { data: churchId, error: createError } = await supabase.rpc(
    "create_church_for_current_user",

    {
      p_name: profile.churchName.trim(),

      p_address: profile.churchAddress.trim(),

      p_email: profile.churchEmail.trim(),

      p_username: profile.superAdminUsername.trim(),
    },
  )

  if (createError) {
    throw createError
  }

  if (typeof churchId !== "string") {
    throw new Error("Supabase did not return a church ID.")
  }

  const extension = logoExtensions[logo.type]

  if (!extension) {
    throw new Error("Choose a PNG, JPG, or WebP logo.")
  }

  const logoPath = `${churchId}/${crypto.randomUUID()}.${extension}`

  const { error: uploadError } = await supabase.storage

    .from("church-logos")

    .upload(logoPath, logo, {
      contentType: logo.type,

      cacheControl: "3600",

      upsert: false,
    })

  if (uploadError) {
    throw uploadError
  }

  const { error: completeError } = await supabase.rpc(
    "complete_church_onboarding",
    { p_logo_path: logoPath },
  )

  if (completeError) {
    throw completeError
  }

  return churchId
}
