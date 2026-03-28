# Golf Charity Subscription Platform

A premium Next.js subscription platform for golf lovers who want to play golf, support charity, and win monthly rewards.

## Features

- Next.js 15 App Router
- TypeScript + Tailwind CSS
- Framer Motion animations
- Supabase authentication and database schema
- Stripe subscription integration ready
- Admin dashboard, draw engine, protected routes
- Modern startup UI with glassmorphism and premium motion

## Quick start

1. Copy `.env.example` to `.env.local`
2. Fill in Supabase and Stripe keys
3. Run `npm install`
4. Run `npm run dev`

## Project structure

- `app/` - Next.js App Router pages
- `components/` - reusable UI primitives and sections
- `lib/` - shared utilities and clients
- `services/` - application logic and draw engine
- `scripts/` - seed script for Supabase
- `supabase/` - SQL schema and setup

## Supabase setup

Use the SQL schema in `supabase/schema.sql` to create tables in your Supabase project.

## Stripe setup

1. Create Stripe account
2. Create subscription products and pricing
3. Configure `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`
4. Use Stripe Checkout or Payment Links to connect customer subscriptions

## Demo credentials

- Admin: `admin@golfimpact.com` / `AdminPass123!`
- Subscriber: `player@golfimpact.com` / `PlayerPass123!`

## Seed data

Run `npm run seed` to populate sample charities and demo users.

## Deployment

Deploy to Vercel with `npm run build`.
Ensure environment variables are added in Vercel dashboard.
