# Aditya Verma — DevOps Portfolio

A modern, recruiter-friendly portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 1. Setup

**Requirements:** Node.js 18.18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Copy the env file
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

**Before deploying**, set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your real domain. Without it, the site falls back to a clearly-labeled placeholder (`your-domain-here.com`) for canonical URLs, Open Graph tags, and the sitemap — it will never silently claim a domain you don't own.

Open [http://localhost:3000](http://localhost:3000).

## 2. Production build

```bash
npm run build
npm start
```

## 3. Deployment (recommended: Vercel)

Vercel is made by the creators of Next.js and is the easiest option — free for personal projects, zero config.

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, select your repo, click **Deploy**.
4. Under **Project Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` — your final domain (you can update this later once you know it).
5. Vercel gives you a live URL (e.g. `your-portfolio.vercel.app`) — you can add a custom domain later under **Settings → Domains**, then update `NEXT_PUBLIC_SITE_URL` to match and redeploy.

Alternative options: **Netlify** (also beginner-friendly) or **GitHub Pages** (requires static export — ask if you'd like this configured).

## 4. How to update your content

All real content lives in `/data` — you never need to touch component/UI code to update information.

| To update...            | Edit this file              |
|--------------------------|------------------------------|
| Name, title, bio, links  | `data/profile.ts`           |
| Skills & proficiency     | `data/skills.ts`             |
| Work experience          | `data/experience.ts`        |
| Projects                 | `data/projects.ts`          |
| Certifications           | `data/certifications.ts`    |
| Education                | `data/education.ts`         |
| Achievements             | `data/achievements.ts`      |

### Adding a project screenshot
1. Add the image file to `public/images/projects/`.
2. In `data/projects.ts`, set that project's `image` field to the path, e.g. `"/images/projects/vpc-diagram.png"`.
3. The polished placeholder is replaced automatically — no other changes needed.

### Adding a GitHub repo / live demo link
In `data/projects.ts`, set `github` and/or `demo` to the URL (currently `null`, which shows "coming soon" states).

### Adding certification/achievement images
Same pattern — set the `image` field in `data/certifications.ts` or `data/achievements.ts` to a path under `public/images/`.

### Replacing your resume
Replace the file at `public/resume/Aditya-Verma-DevOps-Resume.pdf` — the download button already points to this path via `data/profile.ts`.

## 5. Contact section

The contact section is a direct-links card (Email, LinkedIn, GitHub) — no form, no backend required. If you'd like to add a contact form later, connect a backend like [Formspree](https://formspree.io) and build a form component that posts to it.

## 6. Project structure

```
app/              → Next.js App Router pages, layout, global styles
  icon.svg        → Favicon (simple "AV" monogram — replace anytime with your own)
  robots.ts       → Auto-generated robots.txt (uses NEXT_PUBLIC_SITE_URL)
  sitemap.ts      → Auto-generated sitemap.xml (uses NEXT_PUBLIC_SITE_URL)
components/       → UI components (presentation only — no hardcoded content)
data/             → All real content — edit here to update the site
lib/site.ts       → Single source of truth for the site's canonical URL
public/
  images/         → Profile photo + project/cert/achievement images
  resume/         → Downloadable resume PDF
```

## 7. Tech stack

- **Next.js 15** (App Router) + **TypeScript**, **React 19**
- **Tailwind CSS** for styling
- **Framer Motion** for animations (respects `prefers-reduced-motion`)
- **lucide-react** for icons

## 8. Before you go live — checklist

- [x] Project screenshots added (VPC networking, Jenkins pipeline, PortfolioAI UI)
- [x] Certification images and credential URLs added (IBM, Udemy; Forage has no public verification URL)
- [x] THOMSO '25 certificate image added
- [x] PortfolioAI GitHub repo + live demo linked
- [ ] Add GitHub repo links for AWS Multi-VPC Networking and Online Shopping App once created
- [ ] Add PortfolioAI publication URL once available
- [ ] Set `NEXT_PUBLIC_SITE_URL` once you have a custom domain
