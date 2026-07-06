"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";
import { FAQ, pick, type FaqAnswer } from "@/lib/faq";

function Answer({ a }: { a: FaqAnswer }) {
  const { lang } = useApp();
  const paragraphs = pick(a.text, lang).split("\n\n");

  return (
    <div style={{ padding: "2px 4px 20px" }}>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            margin: i === 0 ? 0 : "10px 0 0",
            color: "#3C5158",
            fontFamily: SANS,
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.75,
          }}
        >
          {p}
        </p>
      ))}

      {a.groups?.map((g, gi) => (
        <div key={gi} style={{ marginTop: 14 }}>
          {g.label && (
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11.5,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#1E6E73",
                fontWeight: 700,
                marginBottom: 6,
              }}
            >
              {pick(g.label, lang)}
            </div>
          )}
          <ul
            style={{
              margin: 0,
              paddingLeft: 18,
              color: "#3C5158",
              fontFamily: SANS,
              fontSize: 14.5,
              fontWeight: 300,
              lineHeight: 1.7,
              columns: g.items.length > 4 ? "2 auto" : undefined,
              columnGap: 28,
            }}
          >
            {g.items.map((it) => (
              <li key={it} style={{ breakInside: "avoid" }}>
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function Faq() {
  const { tr, lang } = useApp();

  return (
    <section
      id="faq"
      style={{
        scrollMarginTop: 90,
        background: "#FBF7EE",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: 620, marginBottom: "clamp(30px,4vw,46px)" }}>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#1E6E73",
              fontWeight: 600,
            }}
          >
            {tr("Domande frequenti", "Frequently asked", "Häufige Fragen", "Częste pytania")}
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: SERIF,
              fontWeight: 500,
              color: "#14323A",
              fontSize: "clamp(30px,4.2vw,54px)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
            }}
          >
            {tr(
              "Tutto quello che vuoi sapere prima di partire.",
              "Everything you'd like to know before you come.",
              "Alles, was Sie vor der Anreise wissen möchten.",
              "Wszystko, co chcesz wiedzieć przed przyjazdem.",
            )}
          </h2>
        </Reveal>

        <Reveal>
          <div
            style={{
              borderTop: "1px solid rgba(30,95,95,.18)",
            }}
          >
            {FAQ.map((item) => (
              <details
                key={item.id}
                className="faq-item"
                style={{
                  borderBottom: "1px solid rgba(30,95,95,.18)",
                }}
              >
                <summary
                  className="faq-summary"
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 18,
                    padding: "20px 4px",
                    fontFamily: SERIF,
                    fontWeight: 600,
                    color: "#14323A",
                    fontSize: "clamp(18px,2.4vw,23px)",
                    lineHeight: 1.25,
                  }}
                >
                  <span>{pick(item.q, lang)}</span>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <Answer a={item.a} />
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
