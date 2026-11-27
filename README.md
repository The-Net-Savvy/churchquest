# ChurchQuest

A React and Vite landing page for ChurchQuest.

## Development

Requires Node.js and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` to create a production build.

## Supabase authentication

1. Copy `.env.example` to `.env.local` and set your Supabase project URL and
   publishable (or legacy anon) key.
2. Run the SQL migration in `supabase/migrations/20261127000000_church_accounts.sql`
   in the Supabase SQL Editor. It creates church profiles, Super Admin
   membership, row-level security, and the public `church-logos` storage bucket.
3. In Supabase Authentication, set the site URL and add
   `http://localhost:3000/auth/callback` (plus your deployed callback URL) to
   the allowed redirect URLs.
4. Enable Google, Apple, and Azure (Microsoft) providers in Supabase and add
   each provider's credentials and Supabase callback URL as instructed by its
   provider setup page.

Church email and password signups use the church email as the Supabase login.
When email confirmation is enabled, the user confirms that address before
finishing setup and uploading the logo. Google, Apple, and Microsoft sign-in
create or sign into a Supabase user and then open the church setup step on the
dashboard. The Super Admin username is stored separately from the login email.

## Figma Make and Code Layers files

This directory contains scripts, configuration, and generated files that Figma
Make and Code Layers use to install dependencies, run your app, build previews,
and publish your site.

Commit this directory to your repository so Figma Make and Code Layers can reuse
it the next time this repository is imported and start your preview server right
away, without setting up the project from scratch.

To learn more about these files, see
[Use Git with Figma Make and code layers](https://help.figma.com/hc/en-us/articles/44220165255063-Use-Git-with-Figma-Make-and-code-layers#h_01M5X47F86RN1RW0F8565KZHB8)
in the Figma Help Center.
