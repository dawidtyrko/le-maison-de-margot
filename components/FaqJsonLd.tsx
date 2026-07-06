import { FAQ, answerText, pick } from "@/lib/faq";
import type { Lang } from "./Providers";

// FAQPage structured data. Emitted per-locale so the questions/answers in the
// markup match the visible <Faq> accordion for the same URL — Google requires
// the JSON-LD content to mirror what the user sees on the page.
export function FaqJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: pick(item.q, lang),
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText(item.a, lang),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
