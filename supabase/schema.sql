create extension if not exists pgcrypto;

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null unique,
  role text not null default 'subscriber',
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  plan_type text not null,
  status text not null,
  renewal_date date not null,
  stripe_subscription_id text not null,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  score int not null check (score between 1 and 45),
  score_date date not null,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists charities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  image_url text not null,
  category text not null,
  website text not null,
  featured boolean not null default false,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists user_charities (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  charity_id uuid references charities(id) on delete cascade,
  donation_percentage int not null check (donation_percentage between 1 and 100)
);

create table if not exists monthly_draws (
  id uuid primary key default gen_random_uuid(),
  month int not null check (month between 1 and 12),
  year int not null,
  draw_type text not null,
  winning_numbers int[] not null,
  is_published boolean not null default false,
  jackpot_rollover int not null default 0,
  created_at timestamp with time zone default timezone('utc', now())
);

create table if not exists winners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  draw_id uuid references monthly_draws(id) on delete cascade,
  match_type text not null,
  prize_amount int not null,
  proof_image_url text,
  status text not null default 'pending',
  created_at timestamp with time zone default timezone('utc', now())
);
