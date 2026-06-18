"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Sprig } from "./Sprig";
import { GalleryTile } from "./GalleryTile";
import { SANS, SERIF } from "@/lib/ui";

type Tile = {
  src: string;
  alt: string;
  span?: React.CSSProperties;
  delay?: number;
};

const tiles: Tile[] = [
  {
    src: "/assets/soggiorno-1.jpg",
    alt: "Soggiorno con parete verde petrolio",
    span: { gridColumn: "span 2", gridRow: "span 2" },
  },
  { src: "/assets/soggiorno-2.jpg", alt: "Tavolo in marmo verde", delay: 80 },
  { src: "/assets/camera-3.jpg", alt: "Camera da letto", delay: 140 },
  { src: "/assets/bagno-1.jpg", alt: "Bagno" },
  { src: "/assets/cucina-1.jpg", alt: "Cucina", delay: 80 },
  {
    src: "/assets/ingresso.jpg",
    alt: "Ingresso",
    span: { gridColumn: "span 2" },
    delay: 140,
  },
  {
    src: "/assets/bagno-2.jpg",
    alt: "Bagno alto",
    span: { gridRow: "span 2" },
  },
  { src: "/assets/camera-2.jpg", alt: "Camera con tende", delay: 80 },
  {
    src: "/assets/dettaglio-lampada.jpg",
    alt: "Lampada in ceramica traforata che proietta luce calda",
    span: { gridRow: "span 2" },
    delay: 140,
  },
];

// [it, en, de, pl]
const amenities: [string, string, string, string][] = [
  ["Wi-Fi in fibra", "Fibre Wi-Fi", "Glasfaser-WLAN", "Światłowodowe Wi-Fi"],
  ["Aria condizionata", "Air conditioning", "Klimaanlage", "Klimatyzacja"],
  ["Cucina attrezzata", "Equipped kitchen", "Voll ausgestattete Küche", "Wyposażona kuchnia"],
  ["Macchina caffè Nespresso", "Nespresso machine", "Nespresso-Maschine", "Ekspres Nespresso"],
  ["Smart TV", "Smart TV", "Smart-TV", "Smart TV"],
  ["Lavatrice", "Washing machine", "Waschmaschine", "Pralka"],
  ["Biancheria e asciugamani", "Linen & towels", "Bettwäsche & Handtücher", "Pościel i ręczniki"],
  ["Set di cortesia", "Courtesy set", "Willkommensset", "Zestaw powitalny"],
  ["Asciugacapelli", "Hairdryer", "Haartrockner", "Suszarka do włosów"],
  ["Riscaldamento", "Heating", "Heizung", "Ogrzewanie"],
  ["Culla su richiesta", "Cot on request", "Babybett auf Anfrage", "Łóżeczko na życzenie"],
  ["Self check-in", "Self check-in", "Self-Check-in", "Samodzielne zameldowanie"],
];

export function Apartment() {
  const { tr } = useApp();

  return (
    <section
      id="appartamento"
      style={{
        scrollMarginTop: 90,
        background: "#E3EDEA",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: "clamp(36px,5vw,60px)",
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
              {tr("L'appartamento", "The apartment", "Die Wohnung", "Apartament")}
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
                maxWidth: "13ch",
              }}
            >
              {tr(
                "Una sola casa, curata fino all'ultimo dettaglio.",
                "One home, designed down to the last detail.",
                "Ein einziges Zuhause, bis ins letzte Detail gestaltet.",
                "Jeden dom, dopracowany w każdym szczególe.",
              )}
            </h2>
          </div>
          <p
            style={{
              margin: 0,
              maxWidth: 340,
              color: "#3C5158",
              fontFamily: SANS,
              fontSize: 15,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {tr(
              "Un soggiorno-cucina luminoso open space, una camera matrimoniale silenziosa e un bagno avvolgente. Fino a quattro ospiti. Tocca una foto per ingrandirla.",
              "A bright open-plan living-kitchen, a quiet double bedroom and a spa-like bathroom. Sleeps up to four. Click any photo to enlarge.",
              "Ein helles, offenes Wohn-Ess-Zimmer mit Küche, ein ruhiges Doppelschlafzimmer und ein wohliges Bad. Platz für bis zu vier Gäste. Für eine größere Ansicht auf ein Foto tippen.",
              "Jasny salon z otwartą kuchnią, cicha sypialnia z łóżkiem małżeńskim i przytulna łazienka. Do czterech gości. Dotknij zdjęcia, aby je powiększyć.",
            )}
          </p>
        </Reveal>

        {/* Gallery */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gridAutoRows: "200px",
            gap: 14,
          }}
        >
          {tiles.map((t) => (
            <Reveal key={t.src} delay={t.delay} style={{ ...t.span }}>
              <GalleryTile
                src={t.src}
                alt={t.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: 3,
                }}
              />
            </Reveal>
          ))}
        </div>

        {/* Servizi inclusi */}
        <Reveal
          style={{
            marginTop: "clamp(48px,7vw,80px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "clamp(30px,4vw,60px)",
            alignItems: "start",
          }}
        >
          <div>
            <Sprig
              width={120}
              height={24}
              color="#8CA09A"
              style={{ marginBottom: 14 }}
            />
            <h3
              style={{
                margin: "0 0 10px",
                fontFamily: SERIF,
                fontWeight: 500,
                color: "#14323A",
                fontSize: "clamp(26px,3vw,38px)",
                lineHeight: 1.05,
              }}
            >
              {tr("Servizi inclusi", "What's included", "Inklusivleistungen", "W cenie")}
            </h3>
            <p
              style={{
                margin: 0,
                color: "#3C5158",
                fontFamily: SANS,
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "34ch",
              }}
            >
              {tr(
                "Tutto per un soggiorno autonomo e confortevole — con self check-in, per arrivare quando preferisci.",
                "Everything for a self-sufficient, comfortable stay — with a self check-in so you arrive whenever it suits you.",
                "Alles für einen unabhängigen, komfortablen Aufenthalt — mit Self-Check-in, damit Sie ankommen, wann es Ihnen passt.",
                "Wszystko dla niezależnego i wygodnego pobytu — z samodzielnym zameldowaniem, byś przyjechał, kiedy chcesz.",
              )}
            </p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "14px 26px",
            }}
          >
            {amenities.map(([it, en, de, pl]) => (
              <li
                key={en}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  color: "#27424A",
                  fontFamily: SANS,
                  fontSize: 15,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    // terracotta diamond bullet (per spec)
                    background: "#C0673D",
                    transform: "rotate(45deg)",
                    flex: "none",
                  }}
                />
                <span>{tr(it, en, de, pl)}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
