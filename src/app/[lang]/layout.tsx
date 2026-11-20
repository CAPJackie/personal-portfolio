import type { Metadata, Viewport } from "next";
import { Anybody, Instrument_Sans } from "next/font/google";
import { SiteScript } from "@/components/site/site-script";
import { profile } from "@/data/profile";
import { locales } from "@/i18n/config";
import { getLocale } from "@/i18n/get-locale";
import { getAlternates } from "@/lib/metadata";
import "../globals.css";

const display = Anybody({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
});

const text = Instrument_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-text",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    metadataBase: new URL(profile.siteUrl),
    title: {
      default: `${profile.name}, ${profile.role}`,
      template: `%s | ${profile.name}`,
    },
    description: profile.copy[locale].intro,
    alternates: getAlternates(locale),
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f2e28" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await getLocale()}
      data-scroll-behavior="smooth"
      className={`${display.variable} ${text.variable}`}
      suppressHydrationWarning
    >
      <head>
        <SiteScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
