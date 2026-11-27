/**
 * Renders a script that runs while the HTML is parsed (before first paint).
 * On the client it renders as inert text/plain so React doesn't warn about
 * script tags; suppressHydrationWarning covers the type mismatch.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
