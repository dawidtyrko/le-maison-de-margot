"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

type Review = {
  it: string;
  en: string;
  de: string;
  pl: string;
  by: string;
  delay?: number;
};

// Add genuine guest reviews here and the grid renders automatically.
// While this is empty, an honest "no reviews yet" placeholder is shown.
const reviews: Review[] = [];

export function Reviews() {
  const { tr } = useApp();
  const hasReviews = reviews.length > 0;

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

        {hasReviews ? (
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
        ) : (
          <Reveal
            style={{
              maxWidth: 560,
              margin: "0 auto",
              textAlign: "center",
              borderTop: "1px solid rgba(245,239,227,.2)",
              paddingTop: "clamp(28px,4vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(20px,2.4vw,28px)",
                lineHeight: 1.3,
                color: "#F5EFE3",
              }}
            >
              {tr(
                "Le prime recensioni arriveranno presto.",
                "The first reviews are on their way.",
                "Die ersten Bewertungen folgen in Kürze.",
                "Pierwsze recenzje pojawią się wkrótce.",
              )}
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: SANS,
                fontWeight: 300,
                fontSize: "clamp(14px,1.4vw,16px)",
                lineHeight: 1.7,
                color: "rgba(245,239,227,.75)",
              }}
            >
              {tr(
                "Non ci sono ancora recensioni: soggiorna con noi e sarai tra i primi a raccontare la tua esperienza.",
                "No reviews yet — stay with us and be among the first to share your experience.",
                "Noch keine Bewertungen — wohnen Sie bei uns und teilen Sie als eine der Ersten Ihre Erfahrung.",
                "Nie ma jeszcze recenzji — zatrzymaj się u nas i podziel się wrażeniami jako jeden z pierwszych gości.",
              )}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
