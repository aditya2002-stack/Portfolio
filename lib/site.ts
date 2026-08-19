// Single source of truth for the site's canonical URL.
//
// IMPORTANT: "https://your-domain-here.com" below is a PLACEHOLDER, not a real,
// owned domain. Set NEXT_PUBLIC_SITE_URL in .env.local (and in your host's
// environment variables) to your actual domain before deploying — this value
// feeds into canonical URLs, Open Graph tags, and the sitemap/robots routes.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain-here.com";
