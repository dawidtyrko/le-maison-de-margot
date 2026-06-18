"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

type Card = {
  src: string;
  alt: string;
  titleIt: string;
  titleEn: string;
  titleDe: string;
  titlePl: string;
  chipIt: string;
  chipEn: string;
  chipDe: string;
  chipPl: string;
  descIt: string;
  descEn: string;
  descDe: string;
  descPl: string;
  delay?: number;
};

const cards: Card[] = [
  {
    src: "/assets/polignano.jpg",
    alt: "Polignano a Mare, le case a picco sul mare",
    titleIt: "Polignano a Mare",
    titleEn: "Polignano a Mare",
    titleDe: "Polignano a Mare",
    titlePl: "Polignano a Mare",
    chipIt: "15 min in auto",
    chipEn: "15 min by car",
    chipDe: "15 Min. mit dem Auto",
    chipPl: "15 min samochodem",
    descIt:
      "Le case a picco su Lama Monachile e la leggendaria Grotta Palazzese.",
    descEn:
      "Whitewashed cliffs over Lama Monachile and the legendary Grotta Palazzese.",
    descDe:
      "Die weiß getünchten Häuser hoch über Lama Monachile und die legendäre Grotta Palazzese.",
    descPl:
      "Bielone domy na klifie nad Lama Monachile i legendarna Grotta Palazzese.",
  },
  {
    src: "/assets/spiaggia-1.jpg",
    alt: "Spiaggia di sabbia e acqua turchese",
    titleIt: "Spiagge & cale",
    titleEn: "Beaches & coves",
    titleDe: "Strände & Buchten",
    titlePl: "Plaże i zatoczki",
    chipIt: "7 min a piedi",
    chipEn: "7 min on foot",
    chipDe: "7 Min. zu Fuß",
    chipPl: "7 min pieszo",
    descIt:
      "Cala Porta Vecchia in centro, poi Porto Bianco e Porto Rosso a sud.",
    descEn:
      "Cala Porta Vecchia in town, then Porto Bianco and Porto Rosso to the south.",
    descDe:
      "Cala Porta Vecchia mitten im Ort, dann Porto Bianco und Porto Rosso im Süden.",
    descPl:
      "Cala Porta Vecchia w centrum, a dalej na południe Porto Bianco i Porto Rosso.",
    delay: 60,
  },
  {
    src: "/assets/alberobello.jpg",
    alt: "Alberobello, i trulli dai tetti conici in pietra",
    titleIt: "Alberobello, i trulli",
    titleEn: "Alberobello, the trulli",
    titleDe: "Alberobello, die Trulli",
    titlePl: "Alberobello, trulli",
    chipIt: "35 min in auto",
    chipEn: "35 min by car",
    chipDe: "35 Min. mit dem Auto",
    chipPl: "35 min samochodem",
    descIt:
      "Il rione UNESCO dei tetti coni in pietra, nel cuore della Valle d'Itria.",
    descEn:
      "The UNESCO district of conical stone roofs, in the heart of the Valle d'Itria.",
    descDe:
      "Das UNESCO-Viertel der kegelförmigen Steindächer, im Herzen der Valle d'Itria.",
    descPl:
      "Wpisana na listę UNESCO dzielnica kamiennych stożkowych dachów, w sercu Valle d'Itria.",
    delay: 120,
  },
  {
    src: "/assets/piazza-notte.jpg",
    alt: "Le sere nel centro storico di Monopoli",
    titleIt: "Sere nel centro storico",
    titleEn: "Evenings in the old town",
    titleDe: "Abende in der Altstadt",
    titlePl: "Wieczory na starówce",
    chipIt: "sull'uscio di casa",
    chipEn: "on your doorstep",
    chipDe: "direkt vor der Haustür",
    chipPl: "tuż za progiem",
    descIt:
      "Crudi di mare, enoteche e gelato tra i vicoli illuminati — tutto a piedi.",
    descEn:
      "Raw-fish counters, wine bars and gelato among the lamplit alleys — all on foot.",
    descDe:
      "Rohe Meeresfrüchte, Weinbars und Gelato in den beleuchteten Gassen — alles zu Fuß.",
    descPl:
      "Surowe owoce morza, winiarnie i lody wśród oświetlonych uliczek — wszystko pieszo.",
  },
  {
    src: "/assets/castellana.jpg",
    alt: "Grotte di Castellana, stalattiti e stalagmiti sotterranee",
    titleIt: "Grotte di Castellana",
    titleEn: "Castellana caves",
    titleDe: "Grotte di Castellana",
    titlePl: "Grotte di Castellana",
    chipIt: "25 min in auto",
    chipEn: "25 min by car",
    chipDe: "25 Min. mit dem Auto",
    chipPl: "25 min samochodem",
    descIt:
      "Una cattedrale di stalattiti tre chilometri sottoterra — le grandi grotte di Puglia.",
    descEn:
      "A cathedral of stalactites three kilometres underground — Puglia's great cave system.",
    descDe:
      "Eine Kathedrale aus Stalaktiten drei Kilometer unter der Erde — die großen Höhlen Pugliens.",
    descPl:
      "Katedra ze stalaktytów trzy kilometry pod ziemią — wielkie jaskinie Puglii.",
    delay: 60,
  },
  {
    src: "/assets/masseria.jpg",
    alt: "Grappoli d'uva dorata al tramonto durante la vendemmia",
    titleIt: "Degustazione in masseria",
    titleEn: "Tasting at a masseria",
    titleDe: "Verkostung in einer masseria",
    titlePl: "Degustacja w masserii",
    chipIt: "20 min in auto",
    chipEn: "20 min by car",
    chipDe: "20 Min. mit dem Auto",
    chipPl: "20 min samochodem",
    descIt:
      "Olio extravergine, Primitivo e un corso di orecchiette in una masseria autentica.",
    descEn:
      "Extra-virgin oil, Primitivo and a hands-on orecchiette class on a working farm.",
    descDe:
      "Natives Olivenöl extra, Primitivo und ein Kurs zum Selbermachen von orecchiette auf einer echten masseria.",
    descPl:
      "Oliwa z pierwszego tłoczenia, Primitivo i warsztaty robienia orecchiette w prawdziwej masserii.",
    delay: 120,
  },
];

function Chip({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={{
        position: "absolute",
        top: 12,
        left: 12,
        background: "rgba(20,50,58,.82)",
        color: "#F5EFE3",
        fontFamily: SANS,
        fontSize: 10,
        letterSpacing: ".1em",
        fontWeight: 600,
        padding: "5px 10px",
        borderRadius: 30,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Experiences() {
  const { tr } = useApp();

  return (
    <section
      id="esperienze"
      style={{
        scrollMarginTop: 90,
        background: "#E3EDEA",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal
          style={{
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto clamp(40px,5vw,60px)",
          }}
        >
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
            {tr(
              "Esperienze speciali",
              "Special experiences",
              "Besondere Erlebnisse",
              "Wyjątkowe doświadczenia",
            )}
          </span>
          <h2
            style={{
              margin: "14px 0 0",
              fontFamily: SERIF,
              fontWeight: 500,
              color: "#14323A",
              fontSize: "clamp(30px,4.4vw,56px)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
            }}
          >
            {tr(
              "Luoghi veri per cui vale la pena rallentare.",
              "Real places worth slowing down for.",
              "Echte Orte, für die es sich lohnt, langsamer zu werden.",
              "Prawdziwe miejsca, dla których warto zwolnić.",
            )}
          </h2>
        </Reveal>

        {/* Featured */}
        <Reveal
          as="figure"
          className="tile-feature"
          style={{
            position: "relative",
            margin: "0 0 18px",
            borderRadius: 6,
            overflow: "hidden",
            minHeight: "clamp(320px,46vw,500px)",
            background: "#ddd",
          }}
        >
          <Image
            src="/assets/monopoli-tramonto.jpg"
            alt="Tour in barca al tramonto lungo la costa adriatica"
            fill
            sizes="(max-width: 1200px) 100vw, 1140px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(110deg,rgba(15,40,46,.62),rgba(15,40,46,.12) 60%,transparent)",
            }}
          />
          <figcaption
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              maxWidth: 560,
              padding: "clamp(26px,4vw,48px)",
              color: "#F5EFE3",
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(245,239,227,.16)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                border: "1px solid rgba(245,239,227,.3)",
                borderRadius: 30,
                padding: "6px 14px",
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              {tr(
                "Dal Porto Antico · 5 min a piedi",
                "From Porto Antico · 5 min on foot",
                "Vom Porto Antico · 5 Min. zu Fuß",
                "Od Porto Antico · 5 min pieszo",
              )}
            </span>
            <h3
              style={{
                margin: "0 0 10px",
                fontFamily: SERIF,
                fontWeight: 500,
                fontSize: "clamp(28px,3.6vw,46px)",
                lineHeight: 1.05,
              }}
            >
              {tr(
                "Tour in barca tra le grotte",
                "Boat tour among the sea caves",
                "Bootstour zwischen den Meeresgrotten",
                "Wycieczka łodzią wśród morskich grot",
              )}
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily: SANS,
                fontSize: "clamp(14px,1.4vw,16px)",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "rgba(245,239,227,.92)",
                maxWidth: "46ch",
              }}
            >
              {tr(
                "Si parte dal porto antico verso le cale e le grotte marine dell'Adriatico — ancora più belle nella luce dorata prima del tramonto.",
                "Set out from the old harbour for the coves and sea caves of the Adriatic — best of all in the gold light before sunset.",
                "Vom alten Hafen aus geht es zu den Buchten und Meeresgrotten der Adria — am schönsten im goldenen Licht vor Sonnenuntergang.",
                "Wypływamy ze starego portu ku zatoczkom i morskim grotom Adriatyku — najpiękniejszym w złotym świetle przed zachodem słońca.",
              )}
            </p>
          </figcaption>
        </Reveal>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(248px,1fr))",
            gap: 18,
          }}
        >
          {cards.map((c) => (
            <Reveal
              key={c.src}
              as="article"
              delay={c.delay}
              className="exp-card"
              style={{
                background: "#FBF7EE",
                borderRadius: 5,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  background: "#ddd",
                }}
              >
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  style={{ objectFit: "cover" }}
                />
                <Chip>{tr(c.chipIt, c.chipEn, c.chipDe, c.chipPl)}</Chip>
              </div>
              <div style={{ padding: "22px 22px 26px" }}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontFamily: SERIF,
                    fontWeight: 600,
                    color: "#14323A",
                    fontSize: 25,
                  }}
                >
                  {tr(c.titleIt, c.titleEn, c.titleDe, c.titlePl)}
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
                  {tr(c.descIt, c.descEn, c.descDe, c.descPl)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
