"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Sprig } from "./Sprig";
import { useParallax } from "./useParallax";
import { SANS, SERIF } from "@/lib/ui";

export function TealQuote() {
  const { tr } = useApp();
  const imgRef = useParallax<HTMLDivElement>(0.08);

  return (
    <section style={{ background: "#1A535A", color: "#F5EFE3", overflow: "hidden" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          alignItems: "stretch",
        }}
      >
        <Reveal
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(60px,9vh,120px) clamp(28px,5vw,80px)",
          }}
        >
          <Sprig
            width={130}
            height={26}
            color="#C0894F"
            style={{ marginBottom: 26 }}
          />
          <blockquote
            style={{
              margin: 0,
              fontFamily: SERIF,
              fontWeight: 500,
              fontSize: "clamp(28px,3.6vw,48px)",
              lineHeight: 1.18,
              letterSpacing: "-0.005em",
              textWrap: "balance",
            }}
          >
            {tr(
              "“Volevamo una casa che sapesse di Puglia e di presente — luce di calce, colore deciso, arte alle pareti. Una casa di cui consegnare le chiavi, insieme all'indirizzo giusto per cena.”",
              "“We wanted a home that feels like Puglia and like now — whitewashed light, bold colour, art on the walls. A place to hand over the keys to, along with the best address for dinner.”",
              "“Wir wollten ein Zuhause, das nach Puglia und nach dem Hier und Jetzt schmeckt — Kalklicht, kräftige Farben, Kunst an den Wänden. Ein Ort, dessen Schlüssel man übergibt, zusammen mit der richtigen Adresse fürs Abendessen.”",
              "“Chcieliśmy domu, który czuć Puglię i teraźniejszość — wapienne światło, zdecydowany kolor, sztuka na ścianach. Domu, którego klucze się przekazuje, razem z właściwym adresem na kolację.”",
            )}
          </blockquote>
          <span
            style={{
              marginTop: 28,
              fontFamily: SANS,
              fontSize: 13,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "rgba(245,239,227,.72)",
              fontWeight: 600,
            }}
          >
            {tr(
              "— I padroni di casa di Le Maison de Margot",
              "— The hosts of Le Maison de Margot",
              "— Die Gastgeber von Le Maison de Margot",
              "— Gospodarze Le Maison de Margot",
            )}
          </span>
        </Reveal>
        <div style={{ position: "relative", minHeight: 340, overflow: "hidden" }}>
          <div
            ref={imgRef}
            style={{
              position: "absolute",
              left: 0,
              top: "-6%",
              width: "100%",
              height: "112%",
            }}
          >
            <Image
              src="/assets/soggiorno-3.jpg"
              alt="Il soggiorno con tavolo in marmo verde e parete verde petrolio"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
