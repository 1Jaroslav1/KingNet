# KingNet — modern marketing site

Greenfield rebuild of [king.net.ua](https://king.net.ua/) with a modern dark/neon
telco UI, full Ukrainian content, and a focus on Core Web Vitals.

## Stack

- **Next.js 15** (App Router, RSC, Turbopack)
- **React 19** + **TypeScript** strict
- **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config.js`)
- `next/font` (Inter + Space Grotesk, self-hosted)
- `lucide-react` icons (tree-shakeable)
- Animations are pure CSS (Tailwind keyframes + `@keyframes` in `globals.css`)
  to avoid shipping a motion library

## Performance choices

- Static rendering by default (every page is SSG, no data fetching)
- Almost no client JS — only `Navbar`, `FAQ`, and `ApplicationForm` are
  client components; the rest are RSC
- `display: swap`, `optimizePackageImports` for icons & motion
- Decorative graphics are inline SVG / CSS gradients — no images shipped
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`) set in `next.config.ts`
- `prefers-reduced-motion` respected

## Pages

| Route          | Purpose                          |
| -------------- | -------------------------------- |
| `/`            | Home                             |
| `/taryfy`      | Tariffs (fiber + Wi-Fi 5 GHz)    |
| `/pokryttia`   | Coverage map + street/village list |
| `/aktsiyi`     | News / promos / tips index       |
| `/aktsiyi/[slug]` | Post detail                   |
| `/pro-nas`     | About                            |
| `/kontakty`    | Contacts + application form      |
| `/dokumenty`   | Public offer & legal docs        |

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the built app
npm run typecheck
```

## Customising

- Brand strings, contact info, nav: `src/lib/site.ts`
- Tariffs: `src/lib/tariffs.ts`
- FAQ: `src/lib/faq.ts`
- Posts (acts as mini-CMS until a real backend lands): `src/lib/posts.ts`
- Design tokens: `@theme` block in `src/app/globals.css`

## Wiring the application form

`ApplicationForm.tsx` currently fakes the submission. Point it to a real
endpoint (e.g. a Next.js Route Handler at `app/api/lead/route.ts` that posts
to your CRM or sends an email) when you're ready.
