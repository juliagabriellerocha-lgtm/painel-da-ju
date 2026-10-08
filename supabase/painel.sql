-- Painel da Ju — tabelas do app (rode uma vez no SQL Editor do seu projeto Supabase)
-- Cada pessoa só enxerga e altera as próprias linhas (Row Level Security).

create table if not exists public.painel_state (
  user_id uuid primary key default auth.uid() references auth.users(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.painel_direcao (
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  dia date not null,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, dia)
);

alter table public.painel_state enable row level security;
alter table public.painel_direcao enable row level security;

drop policy if exists "painel_state_own" on public.painel_state;
create policy "painel_state_own" on public.painel_state
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "painel_direcao_own" on public.painel_direcao;
create policy "painel_direcao_own" on public.painel_direcao
  for all to authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());
