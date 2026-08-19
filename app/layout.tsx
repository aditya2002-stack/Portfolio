import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.title}`,
  description: profile.intro,
  keywords: [
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
    "Jenkins",
    "CI/CD",
    "Linux",
    "VPC",
    "Aditya Verma",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.intro,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.intro,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
