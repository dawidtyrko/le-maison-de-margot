"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

const reviews = [
  {
    it: "“L'appartamento più bello trovato in Puglia. Design ovunque, pulizia impeccabile, e il mare a cinque minuti a piedi. Torneremo.”",
    en: "“The most beautiful apartment we found in Puglia. Design everywhere, spotless, and you can walk to the sea in five minutes. We'll be back.”",
    de: "“Die schönste Wohnung, die wir in Apulien gefunden haben. Überall Design, makellos sauber, und das Meer in fünf Minuten zu Fuß. Wir kommen wieder.”",
    pl: "“Najpiękniejszy apartament, jaki znaleźliśmy w Apulii. Wszędzie design, nieskazitelna czystość, a do morza pięć minut pieszo. Wrócimy.”",
    by: "Giulia & Marco — Milano",
    delay: 0,
  },
  {
    it: "“Una casa vera, piena di carattere. I padroni di casa ci hanno dato la lista perfetta dei ristoranti. Il salotto verde è ancora più bello dal vivo.”",
    en: "“A real home, full of character. The hosts gave us the perfect list of restaurants. The teal living room is even better in person.”",
    de: "“Ein echtes Zuhause, voller Charakter. Die Gastgeber gaben uns die perfekte Liste mit Restaurants. Das petrolfarbene Wohnzimmer ist live noch schöner.”",
    pl: "“Prawdziwy dom, pełen charakteru. Gospodarze dali nam idealną listę restauracji. Turkusowy salon na żywo wygląda jeszcze piękniej.”",
    by: "Sophie — Lyon",
    delay: 80,
  },
  {
    it: "“La posizione è tutto e questa è perfetta — piazza, porto e cattedrale tutti a piedi. Silenziosa di notte, bellissima di giorno.”",
    en: "“Position is everything and this is perfect — piazza, port and cathedral all on foot. Quiet at night, beautiful by day.”",
    de: "“Die Lage ist alles, und diese ist perfekt — Piazza, Hafen und Kathedrale alle zu Fuß erreichbar. Nachts ruhig, tagsüber wunderschön.”",
    pl: "“Lokalizacja jest wszystkim, a ta jest idealna — plac, port i katedra, wszystko pieszo. Cicho nocą, pięknie za dnia.”",
    by: "Andreas — Berlin",
    delay: 160,
  },
];

export function Reviews() {
  const { tr } = useApp();

  return (
    <section
      id="recensioni"
      style={{
        scrollMarginTop: 90,
        background: "#143A42",
        color: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,60px)" }}>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#C0894F",
              fontWeight: 600,
            }}
          >
            {tr("Cosa dicono di noi", "What guests say", "Was Gäste sagen", "Co mówią goście")}
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(30px,4.2vw,54px)",
              lineHeight: 1.04,
              color: "#F5EFE3",
            }}
          >
            {tr("Le parole di chi è stato qui.", "Words from those who've stayed.", "Worte derer, die hier waren.", "Słowa tych, którzy tu byli.")}
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "clamp(22px,3vw,40px)",
          }}
        >
          {reviews.map((r) => (
            <Reveal
              key={r.by}
              as="figure"
              delay={r.delay}
              style={{
                margin: 0,
                borderTop: "1px solid rgba(245,239,227,.2)",
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  color: "#C0894F",
                  letterSpacing: "3px",
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                ★★★★★
              </div>
              <blockquote
                style={{
                  margin: 0,
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "clamp(20px,2vw,26px)",
                  lineHeight: 1.4,
                  color: "#F5EFE3",
                }}
              >
                {tr(r.it, r.en, r.de, r.pl)}
              </blockquote>
              <figcaption
                style={{
                  marginTop: 18,
                  fontFamily: SANS,
                  fontSize: 13,
                  letterSpacing: ".04em",
                  color: "rgba(245,239,227,.7)",
                }}
              >
                {r.by}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
