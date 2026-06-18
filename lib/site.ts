// Central site configuration — used by metadata, JSON-LD, sitemap and robots.
// TODO: set SITE_URL to the real domain once registered (e.g. the .com or .it).
export const SITE_URL = "https://lamaisondemargot.com";

export const SITE_NAME = "La Maison de Margot";

export const ADDRESS = {
  street: "Via Tenente Vasco 4",
  locality: "Monopoli",
  region: "BA",
  postalCode: "70043",
  country: "IT",
};

export const GEO = { lat: 40.952659825819396, lng: 17.30087612383493 };

// TODO: replace placeholders with the real contact details.
export const CONTACT = {
  email: "ciao@lamaisondemargot.it",
  phone: "+39 000 000 0000",
  whatsapp: "https://wa.me/390000000000",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const LOCALES = ["it", "en", "de", "pl"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "it";

export const OG_LOCALE: Record<Locale, string> = {
  it: "it_IT",
  en: "en_GB",
  de: "de_DE",
  pl: "pl_PL",
};

// Per-locale <title> and meta description.
export const META: Record<Locale, { title: string; description: string }> = {
  it: {
    title: "La Maison de Margot — Casa d'autore nel centro storico di Monopoli",
    description:
      "Casa vacanze di design nel cuore antico di Monopoli, Puglia. Un appartamento intimo e curato — il mare, le piazze e il porto tutto a pochi passi. Via Tenente Vasco 4, Monopoli (BA).",
  },
  en: {
    title: "La Maison de Margot — A design home in Monopoli's old town, Puglia",
    description:
      "A boutique design apartment in the heart of Monopoli, Puglia — the sea, the squares and the harbour all a short walk away. Via Tenente Vasco 4, Monopoli (BA).",
  },
  de: {
    title:
      "La Maison de Margot — Designwohnung in der Altstadt von Monopoli, Apulien",
    description:
      "Eine intime Designwohnung im historischen Zentrum von Monopoli, Apulien — Meer, Plätze und Hafen nur wenige Schritte entfernt. Via Tenente Vasco 4, Monopoli (BA).",
  },
  pl: {
    title:
      "La Maison de Margot — Designerski apartament na starówce Monopoli, Apulia",
    description:
      "Kameralny, designerski apartament w sercu Monopoli w Apulii — morze, place i port o kilka kroków. Via Tenente Vasco 4, Monopoli (BA).",
  },
};

// Search keywords this page should target (Italian-first, the primary market).
export const KEYWORDS = [
  "casa vacanze Monopoli",
  "appartamento Monopoli centro storico",
  "dove dormire a Monopoli",
  "affitto Monopoli Puglia",
  "casa vacanze centro storico Monopoli",
  "boutique apartment Monopoli",
  "Monopoli old town apartment",
  "vacanze Puglia mare",
  "alloggio Monopoli a piedi dal mare",
  "La Maison de Margot",
];
