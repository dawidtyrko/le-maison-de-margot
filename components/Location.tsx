"use client";

import dynamic from "next/dynamic";
import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

// Leaflet touches `window`, so load the map client-side only.
const LocationMap = dynamic(
  () => import("./LocationMap").then((m) => m.LocationMap),
  { ssr: false, loading: () => null },
);

const rows: { it: string; en: string; de: string; pl: string; time: string }[] = [
  {
    it: "Piazza Vittorio Emanuele II / Villa Comunale",
    en: "Piazza Vittorio Emanuele II / Villa Comunale",
    de: "Piazza Vittorio Emanuele II / Villa Comunale",
    pl: "Piazza Vittorio Emanuele II / Villa Comunale",
    time: "2 min",
  },
  {
    it: "Piazza Garibaldi (cuore del centro storico)",
    en: "Piazza Garibaldi (heart of the old town)",
    de: "Piazza Garibaldi (Herz der Altstadt)",
    pl: "Piazza Garibaldi (serce starówki)",
    time: "4 min",
  },
  {
    it: "Porto Antico (vecchio porto)",
    en: "Porto Antico (old harbour)",
    de: "Porto Antico (alter Hafen)",
    pl: "Porto Antico (stary port)",
    time: "5 min",
  },
  {
    it: "Cattedrale della Madia",
    en: "Cattedrale della Madia",
    de: "Cattedrale della Madia",
    pl: "Cattedrale della Madia",
    time: "5 min",
  },
  {
    it: "Castello Carlo V",
    en: "Castello Carlo V",
    de: "Castello Carlo V",
    pl: "Castello Carlo V",
    time: "7 min",
  },
  {
    it: "Cala Porta Vecchia (spiaggia in centro)",
    en: "Cala Porta Vecchia (town beach)",
    de: "Cala Porta Vecchia (Stadtstrand)",
    pl: "Cala Porta Vecchia (plaża w centrum)",
    time: "7 min",
  },
  {
    it: "Stazione ferroviaria (treni da/per Bari)",
    en: "Train station (trains to/from Bari)",
    de: "Bahnhof (Züge von/nach Bari)",
    pl: "Dworzec kolejowy (pociągi do/z Bari)",
    time: "12 min",
  },
];

export function Location() {
  const { tr } = useApp();

  return (
    <section
      id="posizione"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(300px,100%),1fr))",
          gap: "clamp(40px,6vw,80px)",
          alignItems: "center",
        }}
      >
        {/* real map */}
        <Reveal
          style={{
            position: "relative",
            aspectRatio: "1/1",
            background: "#D4E4E0",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(30,95,95,.16)",
          }}
        >
          <LocationMap />
        </Reveal>

        {/* list */}
        <Reveal>
          <span
            style={{
              fontFamily: SANS,
              fontSize: 12,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#A8542E",
              fontWeight: 600,
            }}
          >
            {tr("Posizione — tutto a piedi", "Location — all on foot", "Lage — alles zu Fuß", "Lokalizacja — wszystko pieszo")}
          </span>
          <h2
            style={{
              margin: "14px 0 14px",
              fontFamily: SERIF,
              fontWeight: 500,
              color: "#14323A",
              fontSize: "clamp(30px,4vw,52px)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              maxWidth: "14ch",
            }}
          >
            {tr(
              "Sul bordo del centro storico.",
              "Right on the edge of the centro storico.",
              "Direkt am Rand der Altstadt.",
              "Tuż przy granicy starówki.",
            )}
          </h2>
          <p
            style={{
              margin: "0 0 26px",
              color: "#3C5158",
              fontFamily: SANS,
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "40ch",
            }}
          >
            {tr(
              "A ridosso del centro storico, accanto a Piazza Vittorio Emanuele II. Lascia l'auto fuori e cammina: tutto ciò che conta è a pochi minuti.",
              "On the edge of the old town, beside Piazza Vittorio Emanuele II. Leave the car outside and walk: everything that matters is minutes away.",
              "Unmittelbar am Rand der Altstadt, neben Piazza Vittorio Emanuele II. Lassen Sie das Auto draußen und gehen Sie zu Fuß: Alles, was zählt, ist nur wenige Minuten entfernt.",
              "Tuż przy starówce, obok Piazza Vittorio Emanuele II. Zostaw auto na zewnątrz i idź pieszo: wszystko, co ważne, jest o kilka minut drogi.",
            )}
          </p>
          <div
            style={{
              fontFamily: SANS,
              fontSize: 11,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#8a7c5e",
              fontWeight: 600,
              marginBottom: 10,
            }}
          >
            {tr("A piedi · indicativi", "On foot · approximate", "Zu Fuß · ungefähr", "Pieszo · orientacyjnie")}
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1px solid rgba(30,95,95,.22)",
            }}
          >
            {rows.map((r) => (
              <li
                key={r.en}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 12,
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(30,95,95,.22)",
                }}
              >
                <span
                  style={{
                    color: "#14323A",
                    fontFamily: SANS,
                    fontSize: "clamp(15px,1.5vw,17px)",
                  }}
                >
                  {tr(r.it, r.en, r.de, r.pl)}
                </span>
                <span
                  style={{
                    flex: 1,
                    borderBottom: "1px dotted rgba(30,95,95,.4)",
                    transform: "translateY(-4px)",
                  }}
                />
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 20,
                    color: "#2E6E72",
                    whiteSpace: "nowrap",
                  }}
                >
                  {r.time}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
