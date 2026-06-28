import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Traderoc | AI Trading Journal, Replay & Backtesting Platform",
  description:
    "Traderoc is an AI trading journal for serious traders to track trades, backtest strategies, replay sessions, and improve consistency with AI insights.",
  keywords: [
    "ai trading journal",
    "trading journal",
    "trade analytics",
    "backtesting software",
    "trade replay",
    "prop firm tracking",
    "trading performance tracker",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Traderoc | AI Trading Journal, Replay & Backtesting Platform",
    description:
      "Track trades, backtest strategies, replay sessions, and improve consistency with AI-powered trading journal insights.",
    url: siteUrl,
    siteName: "Traderoc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Traderoc | AI Trading Journal Platform",
    description:
      "AI trading journal software for backtesting, trade replay, and performance analytics.",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Traderoc",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://twitter.com",
      "https://instagram.com",
      "https://discord.com",
      "https://linkedin.com",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
