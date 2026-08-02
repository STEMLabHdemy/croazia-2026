-- Croazia 2026: un documento condiviso per ciascun account.
-- Eseguire questo file nel SQL Editor del progetto Supabase.

create table if not exists public.travel_guides (
  owner_id uuid primary key references auth.users(id) on delete cascade,
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.travel_guides enable row level security;

grant select, insert, update on table public.travel_guides to authenticated;

create policy "read own travel guide"
on public.travel_guides
for select
to authenticated
using ((select auth.uid()) = owner_id);

create policy "create own travel guide"
on public.travel_guides
for insert
to authenticated
with check ((select auth.uid()) = owner_id);

create policy "update own travel guide"
on public.travel_guides
for update
to authenticated
using ((select auth.uid()) = owner_id)
with check ((select auth.uid()) = owner_id);

-- Consente agli altri dispositivi collegati allo stesso account di ricevere
-- immediatamente le modifiche del documento.
alter publication supabase_realtime add table public.travel_guides;
