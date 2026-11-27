create table if not exists public.churches (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) between 2 and 160),
  address text not null check (length(trim(address)) between 3 and 500),
  email text not null check (length(trim(email)) between 3 and 254),
  logo_path text,
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.church_members (
  user_id uuid primary key references auth.users (id) on delete cascade,
  church_id uuid not null references public.churches (id) on delete cascade,
  username text not null check (username ~ '^[A-Za-z0-9._-]{3,30}$'),
  role text not null default 'super_admin' check (role = 'super_admin'),
  created_at timestamptz not null default now()
);

create unique index if not exists church_members_username_lower_key
  on public.church_members (lower(username));

alter table public.churches enable row level security;
alter table public.church_members enable row level security;

revoke all on public.churches, public.church_members from anon, authenticated;
grant select on public.churches to authenticated;
grant select on public.church_members to authenticated;

drop policy if exists "Church members can read their church" on public.churches;
create policy "Church members can read their church"
  on public.churches for select to authenticated
  using (
    exists (
      select 1
      from public.church_members member
      where member.church_id = churches.id
        and member.user_id = (select auth.uid())
    )
  );

drop policy if exists "Super admins can update their church" on public.churches;

drop policy if exists "Users can read their own church membership" on public.church_members;
create policy "Users can read their own church membership"
  on public.church_members for select to authenticated
  using (user_id = (select auth.uid()));

create or replace function public.create_church_for_current_user(
  p_name text,
  p_address text,
  p_email text,
  p_username text
)
returns uuid
language plpgsql
security definer
set search_path = pg_catalog, public, auth, pg_temp
as $$
declare
  current_user_id uuid := auth.uid();
  current_church_id uuid;
begin
  if current_user_id is null then
    raise exception 'Sign in before creating a church.';
  end if;

  if length(trim(coalesce(p_name, ''))) not between 2 and 160
    or length(trim(coalesce(p_address, ''))) not between 3 and 500
    or length(trim(coalesce(p_email, ''))) not between 3 and 254
    or trim(coalesce(p_username, '')) !~ '^[A-Za-z0-9._-]{3,30}$'
  then
    raise exception 'One or more church details are invalid.';
  end if;

  select church_id
    into current_church_id
    from public.church_members
    where user_id = current_user_id;

  if current_church_id is not null then
    update public.churches
      set name = trim(p_name),
          address = trim(p_address),
          email = trim(p_email)
      where id = current_church_id;

    update public.church_members
      set username = trim(p_username)
      where user_id = current_user_id;

    return current_church_id;
  end if;

  insert into public.churches (name, address, email)
    values (trim(p_name), trim(p_address), trim(p_email))
    returning id into current_church_id;

  insert into public.church_members (user_id, church_id, username)
    values (current_user_id, current_church_id, trim(p_username));

  return current_church_id;
end;
$$;

revoke all on function public.create_church_for_current_user(text, text, text, text) from public;
grant execute on function public.create_church_for_current_user(text, text, text, text) to authenticated;

create or replace function public.complete_church_onboarding(p_logo_path text)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public, auth, pg_temp
as $$
declare
  current_user_id uuid := auth.uid();
  current_church_id uuid;
begin
  if current_user_id is null then
    raise exception 'Sign in before completing church setup.';
  end if;

  select church_id
    into current_church_id
    from public.church_members
    where user_id = current_user_id;

  if current_church_id is null then
    raise exception 'Create a church profile before completing setup.';
  end if;

  if p_logo_path is null
    or p_logo_path not like current_church_id::text || '/%'
    or not exists (
      select 1
      from storage.objects
      where bucket_id = 'church-logos'
        and name = p_logo_path
    )
  then
    raise exception 'Upload a church logo before completing setup.';
  end if;

  update public.churches
    set logo_path = p_logo_path,
        onboarding_complete = true
    where id = current_church_id;
end;
$$;

revoke all on function public.complete_church_onboarding(text) from public;
grant execute on function public.complete_church_onboarding(text) to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'church-logos',
  'church-logos',
  true,
  5242880,
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update
  set public = excluded.public,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Church admins can upload their logo" on storage.objects;
create policy "Church admins can upload their logo"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'church-logos'
    and exists (
      select 1
      from public.church_members member
      where member.user_id = (select auth.uid())
        and member.church_id::text = (storage.foldername(name))[1]
    )
  );

drop policy if exists "Church admins can update their logo" on storage.objects;
create policy "Church admins can update their logo"
  on storage.objects for update to authenticated
  using (
    bucket_id = 'church-logos'
    and exists (
      select 1
      from public.church_members member
      where member.user_id = (select auth.uid())
        and member.church_id::text = (storage.foldername(name))[1]
    )
  )
  with check (
    bucket_id = 'church-logos'
    and exists (
      select 1
      from public.church_members member
      where member.user_id = (select auth.uid())
        and member.church_id::text = (storage.foldername(name))[1]
    )
  );

drop policy if exists "Church admins can delete their logo" on storage.objects;
create policy "Church admins can delete their logo"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'church-logos'
    and exists (
      select 1
      from public.church_members member
      where member.user_id = (select auth.uid())
        and member.church_id::text = (storage.foldername(name))[1]
    )
  );
