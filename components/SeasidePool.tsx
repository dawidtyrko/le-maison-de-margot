"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { GalleryTile } from "./GalleryTile";
import { SANS, SERIF } from "@/lib/ui";

const poolGrid = [
  { src: "/assets/bar-pool-1.jpg", alt: "Piscina a sfioro con sedute vista mare" },
  {
    src: "/assets/bar-pool-2.jpg",
    alt: "Sedute in rattan e lampada vista mare",
    delay: 70,
  },
  {
    src: "/assets/bar-pool-vista.jpg",
    alt: "Piscina a sfioro e orizzonte sul mare",
    delay: 140,
  },
  { src: "/assets/bar-pool-jacuzzi.jpg", alt: "Vasca idromassaggio con vista sul mare" },
];

export function SeasidePool() {
  const { tr } = useApp();

  return (
    <section
      id="bar"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(24px,6vw,90px)",
        }}
      >
        <Reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          <div>
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
              {tr(
                "Il bar sul mare",
                "The seaside pool bar",
                "Die Bar am Meer",
                "Bar nad morzem",
              )}
            </span>
            <h2
              style={{
                margin: "14px 0 0",
                fontFamily: SERIF,
                fontWeight: 500,
                color: "#14323A",
                fontSize: "clamp(32px,4.6vw,62px)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                maxWidth: "15ch",
              }}
            >
              {tr(
                "Un aperitivo con i piedi sull'acqua.",
                "Aperitivo with your feet over the water.",
                "Ein Aperitivo mit den Füßen über dem Wasser.",
                "Aperitivo ze stopami nad wodą.",
              )}
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 360,
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#3C5158",
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              {tr(
                "A pochi minuti dall'appartamento, la terrazza sul mare di Bellavista Suite — lettini, amache e una piccola piscina a sfioro a picco sulla roccia, proprio sull'Adriatico.",
                "A few minutes from the apartment, the sea-facing rooftop of Bellavista Suite — sun loungers, hammocks and a small infinity pool perched on the rock, right over the Adriatic.",
                "Nur wenige Minuten von der Wohnung entfernt die Dachterrasse zum Meer der Bellavista Suite — Liegen, Hängematten und ein kleiner Infinity-Pool auf dem Felsen, direkt über der Adria.",
                "Kilka minut od apartamentu, taras nad morzem w Bellavista Suite — leżaki, hamaki i mały basen typu infinity na skale, tuż nad Adriatykiem.",
              )}
            </p>
            <a
              href="https://bellavistamonopoli.it"
              target="_blank"
              rel="noopener"
              className="pill-link"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                border: "1px solid rgba(30,110,115,.45)",
                color: "#1E6E73",
                borderRadius: 30,
                padding: "8px 16px",
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  background: "currentColor",
                  borderRadius: "50%",
                }}
              />
              <span>{tr("Bellavista Suite · Via San Vito 11", "Bellavista Suite · Via San Vito 11", "Bellavista Suite · Via San Vito 11", "Bellavista Suite · Via San Vito 11")}</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* full-width hero image */}
      <Reveal
        style={{
          margin: "clamp(34px,5vw,56px) 0 16px",
          padding: "0 clamp(24px,6vw,90px)",
        }}
      >
        <GalleryTile
          src="/assets/bar-pool-3.jpg"
          alt="Bar con piscina sul mare — lettini e amache"
          className="tile-slow"
          style={{
            width: "100%",
            overflow: "hidden",
            borderRadius: 5,
            aspectRatio: "21/9",
          }}
        />
      </Reveal>

      {/* 4-up grid */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(24px,6vw,90px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 16,
          }}
        >
          {poolGrid.map((g) => (
            <Reveal key={g.src} delay={g.delay}>
              <GalleryTile
                src={g.src}
                alt={g.alt}
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 4,
                  aspectRatio: "3/2",
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
