# Soli Club Website

Frontend for Soli Club, a Helsinki KPOP DJ and club collective. The app stays on Vite + React + TypeScript, uses React Router for the route map, and is prepared for Supabase Auth, Postgres, Storage, and public form inserts from the client.

## Stack

- Vite + React + TypeScript
- React Router
- Tailwind CSS v4 through the Vite plugin
- Framer Motion for the Step 2 DJ-booth interaction work
- Supabase JS client for data, auth, storage, and form inserts
- Spotify iFrame API for the member track player in the DJ booth

## Local Setup

Install dependencies:

```bash
npm install
```

Create local env values:

```bash
cp .env.local.example .env.local
```

Fill in:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SITE_MODE=
```

Run the dev server:

```bash
npm run dev
```

Build and lint:

```bash
npm run build
npm run lint
```

## Supabase Notes

Admin accounts are created manually in Supabase Auth. Do not add public registration to the site.

The `/admin` experience should check the Supabase session client-side and redirect unauthenticated visitors back to `/admin`. That check is only a user-experience gate. Row Level Security is the actual security boundary.

Public forms insert directly from the browser using the anon key:

- `business_inquiries`
- `contact_messages`
- `feedback`

RLS must allow public inserts on those tables and block public reads. Admin-only reads, updates, and deletes should require authenticated users.

## Vercel Deployment Mode

Use `VITE_SITE_MODE=maintenance` on the Production environment if you want `soliclub.fi` to show the maintenance page.

Use `VITE_SITE_MODE=live` on the Preview environment so the work-in-progress site stays visible there.

Suggested Vercel setup:

- `Production` environment for `main`
- `Preview` environment for your preview branch
- `soliclub.fi` attached to Production
- `preview.soliclub.fi` attached to Preview if you want a dedicated preview domain

## Demo Content

Step 1 uses local demo data in `src/data/site.ts` so every page can be laid out before Supabase is connected. Later steps should seed matching rows in Supabase for members and events, then replace the local reads.

## Assets

Placeholder art lives under `public/assets/`:

- `background/` for moon and cloud artwork
- `mascot/` for idle sprite frames
- `decks/` for the turntable/deck base
- `og/` for sharing art

The final client art can replace those files without changing the route structure.
