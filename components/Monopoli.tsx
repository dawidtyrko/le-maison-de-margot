"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

type Fig = {
  src: string;
  alt: string;
  it: string;
  en: string;
  de: string;
  pl: string;
  ratio: string;
  span2?: boolean;
  big?: boolean;
};

const figures: Fig[] = [
  {
    src: "/assets/monopoli-2.jpg",
    alt: "I tetti di Monopoli",
    it: "Il centro storico, tetto su tetto",
    en: "The old town, rooftop to rooftop",
    de: "Die Altstadt, Dach an Dach",
    pl: "Starówka, dach przy dachu",
    ratio: "16/10",
    span2: true,
    big: true,
  },
  {
    src: "/assets/monopoli-porto.jpg",
    alt: "Il porto antico di Monopoli",
    it: "Il Porto Antico",
    en: "The old harbour",
    de: "Der alte Hafen",
    pl: "Stary port",
    ratio: "4/5",
  },
  {
    src: "/assets/centro-bianco.jpg",
    alt: "Vicoli imbiancati a calce",
    it: "Vicoli di calce",
    en: "Whitewashed alleys",
    de: "Kalkweiße Gassen",
    pl: "Pobielone wapnem uliczki",
    ratio: "4/5",
  },
  {
    src: "/assets/spiaggia-club.jpg",
    alt: "Spiaggia con lido e acqua trasparente",
    it: "Spiagge e lidi a pochi minuti",
    en: "Beaches and lidos minutes away",
    de: "Strände und Badeanstalten nur Minuten entfernt",
    pl: "Plaże i kąpieliska o kilka minut stąd",
    ratio: "16/10",
    span2: true,
    big: true,
  },
  {
    src: "/assets/cala-1.jpg",
    alt: "Cala d'acqua cristallina tra le rocce",
    it: "Cale d'acqua cristallina",
    en: "Crystal-clear coves",
    de: "Buchten mit kristallklarem Wasser",
    pl: "Zatoczki o krystalicznie czystej wodzie",
    ratio: "4/5",
  },
  {
    src: "/assets/finestra-mare.jpg",
    alt: "Il mare incorniciato da una finestra in pietra",
    it: "Il mare, incorniciato nella pietra",
    en: "The sea, framed in stone",
    de: "Das Meer, von Stein eingerahmt",
    pl: "Morze w kamiennej ramie",
    ratio: "4/5",
  },
];

const blurbs: {
  it: [string, string];
  en: [string, string];
  de: [string, string];
  pl: [string, string];
}[] = [
  {
    it: [
      "Polignano a Mare",
      "La città a picco sul mare e Cala Porto — circa 20 minuti in auto o treno.",
    ],
    en: [
      "Polignano a Mare",
      "The cliff-top town and Cala Porto — about 20 minutes by car or train.",
    ],
    de: [
      "Polignano a Mare",
      "Die Stadt hoch über dem Meer und Cala Porto — etwa 20 Minuten mit dem Auto oder Zug.",
    ],
    pl: [
      "Polignano a Mare",
      "Miasteczko na klifie nad morzem i Cala Porto — około 20 minut samochodem lub pociągiem.",
    ],
  },
  {
    it: [
      "Alberobello",
      "Il rione dei trulli, patrimonio UNESCO — circa 35 minuti nell'entroterra.",
    ],
    en: [
      "Alberobello",
      "The UNESCO trulli district — about 35 minutes inland.",
    ],
    de: [
      "Alberobello",
      "Das UNESCO-Welterbe-Viertel der Trulli — etwa 35 Minuten im Landesinneren.",
    ],
    pl: [
      "Alberobello",
      "Dzielnica trulli wpisana na listę UNESCO — około 35 minut w głąb lądu.",
    ],
  },
  {
    it: [
      "Cale & spiagge",
      "Porto Bianco, Porto Rosso e la costa a sud — pochi minuti in auto.",
    ],
    en: [
      "Coves & beaches",
      "Porto Bianco, Porto Rosso and the coast south of town — a few minutes by car.",
    ],
    de: [
      "Buchten & Strände",
      "Porto Bianco, Porto Rosso und die Küste südlich der Stadt — wenige Minuten mit dem Auto.",
    ],
    pl: [
      "Zatoczki i plaże",
      "Porto Bianco, Porto Rosso i wybrzeże na południe od miasta — kilka minut samochodem.",
    ],
  },
];

export function Monopoli() {
  const { tr } = useApp();

  return (
    <section
      id="monopoli"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: 620, marginBottom: "clamp(36px,5vw,56px)" }}>
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
            {tr("Monopoli & dintorni", "Monopoli & around", "Monopoli & Umgebung", "Monopoli i okolice")}
          </span>
          <h2
            style={{
              margin: "14px 0 18px",
              fontFamily: SERIF,
              fontWeight: 500,
              color: "#14323A",
              fontSize: "clamp(32px,4.6vw,62px)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
            }}
          >
            {tr(
              "Una città bianca, tra il mare e i trulli.",
              "A white town between the sea and the trulli.",
              "Eine weiße Stadt zwischen dem Meer und den Trulli.",
              "Białe miasteczko między morzem a trulli.",
            )}
          </h2>
          <p
            style={{
              margin: 0,
              color: "#3C5158",
              fontFamily: SANS,
              fontSize: "clamp(16px,1.5vw,18px)",
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            {tr(
              "Vicoli imbiancati a calce, campanili barocchi, un antico porto di pescatori e cale d'acqua limpida. Dall'appartamento raggiungi il cuore a piedi — e il resto della Puglia è a breve distanza in auto.",
              "Whitewashed alleys, baroque bell-towers, an old fishing port and coves of clear water. From the apartment you reach the heart of it on foot — and the rest of Puglia is an easy drive away.",
              "Kalkweiße Gassen, barocke Glockentürme, ein alter Fischerhafen und Buchten mit klarem Wasser. Von der Wohnung aus erreichst du das Herz der Stadt zu Fuß — und der Rest Apuliens ist mit dem Auto schnell erreichbar.",
              "Pobielone wapnem uliczki, barokowe dzwonnice, stary port rybacki i zatoczki z przejrzystą wodą. Z apartamentu dotrzesz do serca miasta pieszo — a reszta Apulii jest w zasięgu krótkiej jazdy samochodem.",
            )}
          </p>
        </Reveal>

        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {figures.map((f) => (
            <figure
              key={f.src}
              style={{
                position: "relative",
                margin: 0,
                gridColumn: f.span2 ? "span 2" : undefined,
                aspectRatio: f.ratio,
                overflow: "hidden",
                borderRadius: 4,
                background: "#ddd",
              }}
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes={f.span2 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                style={{ objectFit: "cover" }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  right: 0,
                  padding: f.big ? 24 : 18,
                  background: "linear-gradient(transparent,rgba(15,40,46,.7))",
                  color: "#F5EFE3",
                  fontFamily: SERIF,
                  fontSize: f.big
                    ? "clamp(20px,2.4vw,30px)"
                    : "clamp(18px,2vw,24px)",
                }}
              >
                {tr(f.it, f.en, f.de, f.pl)}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        <Reveal
          style={{
            marginTop: "clamp(34px,4vw,52px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "clamp(20px,3vw,40px)",
          }}
        >
          {blurbs.map((b) => (
            <div
              key={b.en[0]}
              style={{
                borderTop: "1px solid rgba(30,95,95,.3)",
                paddingTop: 18,
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: SERIF,
                  fontWeight: 600,
                  color: "#14323A",
                  fontSize: 22,
                }}
              >
                {tr(b.it[0], b.en[0], b.de[0], b.pl[0])}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#3C5158",
                  fontFamily: SANS,
                  fontSize: 14,
                  fontWeight: 300,
                  lineHeight: 1.65,
                }}
              >
                {tr(b.it[1], b.en[1], b.de[1], b.pl[1])}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
