import type { MetadataRoute } from "next";
import { SITE_URL, LOCALES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE_URL}/${l}`]),
  );

  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "it" ? 1 : 0.8,
    alternates: { languages },
  }));
}
