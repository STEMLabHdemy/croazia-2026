-- Croazia 2026: documento condiviso tra browser e PWA.
-- Può essere eseguito più volte nel SQL Editor di Supabase.

create table if not exists public.travel_guides (
  id text primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  content jsonb not null,
  updated_at timestamptz not null default now(),
  constraint only_croazia_2026 check (id = 'croazia-2026')
);

alter table public.travel_guides enable row level security;

grant select on table public.travel_guides to anon, authenticated;
grant insert, update on table public.travel_guides to authenticated;

drop policy if exists "public can read travel guide" on public.travel_guides;
create policy "public can read travel guide"
on public.travel_guides
for select
to anon, authenticated
using (id = 'croazia-2026');

drop policy if exists "owner can create travel guide" on public.travel_guides;
create policy "owner can create travel guide"
on public.travel_guides
for insert
to authenticated
with check (
  id = 'croazia-2026'
  and owner_id = (select auth.uid())
  and (select auth.jwt() ->> 'email') = 'stemlabhdemy@proton.me'
);

drop policy if exists "owner can update travel guide" on public.travel_guides;
create policy "owner can update travel guide"
on public.travel_guides
for update
to authenticated
using (
  owner_id = (select auth.uid())
  and (select auth.jwt() ->> 'email') = 'stemlabhdemy@proton.me'
)
with check (
  id = 'croazia-2026'
  and owner_id = (select auth.uid())
  and (select auth.jwt() ->> 'email') = 'stemlabhdemy@proton.me'
);

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'travel_guides'
  ) then
    alter publication supabase_realtime add table public.travel_guides;
  end if;
end $$;
