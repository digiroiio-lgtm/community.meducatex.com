import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = "https://community.meducatex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MeducateX Community — Surgical Education, Reimagined",
    template: "%s | MeducateX Community",
  },
  description:
    "MeducateX is building educational infrastructure for the next generation of surgical intelligence. Join surgeons, educators, and institutional leaders shaping the future of OR knowledge transfer.",
  keywords: [
    "surgical education",
    "operating room learning",
    "surgical intelligence",
    "medical education",
    "MeducateX",
    "OR training",
    "healthcare education",
    "surgical knowledge transfer",
  ],
  authors: [{ name: "MeducateX" }],
  creator: "MeducateX",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MeducateX Community",
    title: "MeducateX Community — Surgical Education, Reimagined",
    description:
      "Join surgeons, educators, and institutional leaders building the future of operating room education and surgical intelligence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeducateX Community — Surgical Education, Reimagined",
    description:
      "Join surgeons, educators, and institutional leaders building the future of operating room education.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
