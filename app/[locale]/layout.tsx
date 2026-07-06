import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant, Mulish } from "next/font/google";
import "../globals.css";
import { JsonLd } from "@/components/JsonLd";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import {
  SITE_URL,
  SITE_NAME,
  KEYWORDS,
  LOCALES,
  META,
  OG_LOCALE,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/site";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const locale = (LOCALES as readonly string[]).includes(params.locale)
    ? (params.locale as Locale)
    : "it";
  const m = META[locale];

  const languages: Record<string, string> = {
    "x-default": "/it",
  };
  LOCALES.forEach((l) => (languages[l] = `/${l}`));

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: m.title, template: "%s · Le Maison de Margot" },
    description: m.description,
    keywords: KEYWORDS,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME }],
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
    },
    alternates: { canonical: `/${locale}`, languages },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: m.title,
      description: m.description,
      url: `${SITE_URL}/${locale}`,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map(
        (l) => OG_LOCALE[l],
      ),
      images: [
        {
          url: "/assets/monopoli-tramonto.jpg",
          width: 1200,
          height: 800,
          alt: "Tramonto sul porto di Monopoli, Puglia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/assets/monopoli-tramonto.jpg"],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!(LOCALES as readonly string[]).includes(params.locale)) notFound();
  const lang = (params.locale as Locale) ?? DEFAULT_LOCALE;

  return (
    <html
      lang={params.locale}
      className={`${cormorant.variable} ${mulish.variable}`}
    >
      <body>
        <JsonLd />
        <FaqJsonLd lang={lang} />
        {children}
      </body>
    </html>
  );
}
