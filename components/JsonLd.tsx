import { SITE_URL, SITE_NAME, ADDRESS, GEO, CONTACT } from "@/lib/site";

// Schema.org structured data: tells search engines this is a lodging business
// with a real address, location, amenities and guest ratings. Rendered as a
// server-side <script type="application/ld+json"> in the document body.
const amenities = [
  "Wi-Fi in fibra",
  "Aria condizionata",
  "Cucina attrezzata",
  "Macchina caffè Nespresso",
  "Smart TV",
  "Lavatrice",
  "Biancheria e asciugamani",
  "Riscaldamento",
  "Self check-in",
];

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#lodging`,
    name: SITE_NAME,
    description:
      "Casa vacanze di design nel centro storico di Monopoli, Puglia. Un appartamento intimo e curato, a pochi passi dal mare, dalle piazze e dal porto.",
    url: SITE_URL,
    image: [
      `${SITE_URL}/assets/monopoli-tramonto.jpg`,
      `${SITE_URL}/assets/soggiorno-1.jpg`,
      `${SITE_URL}/assets/monopoli-2.jpg`,
    ],
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: `https://www.google.com/maps?q=${GEO.lat},${GEO.lng}`,
    areaServed: "Monopoli, Puglia",
    numberOfRooms: 1,
    petsAllowed: false,
    amenityFeature: amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    // aggregateRating / review intentionally omitted until there are genuine
    // guest reviews — fabricated rating markup violates Google's guidelines.
    sameAs: [CONTACT.instagram, CONTACT.facebook].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
