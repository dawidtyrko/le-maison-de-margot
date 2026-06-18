"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { useParallax } from "./useParallax";
import { SANS, SERIF } from "@/lib/ui";

export function Hero() {
  const { tr } = useApp();
  const imgRef = useParallax<HTMLDivElement>(0.22);

  return (
    <section style={{ position: "relative" }}>
      <span id="top" />
      <div
        style={{
          position: "relative",
          minHeight: "100svh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={imgRef}
          style={{
            position: "absolute",
            left: 0,
            top: "-12%",
            width: "100%",
            height: "124%",
          }}
        >
          <Image
            src="/assets/hero.jpg"
            alt="La costa di Monopoli al tramonto, Puglia"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,rgba(28,28,30,.34) 0%,rgba(28,28,30,.12) 38%,rgba(40,30,24,.5) 100%)",
          }}
        />
        <div
          className="reveal is-in"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 26,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              border: "1px solid rgba(245,239,227,.55)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: 36,
                color: "#F5EFE3",
                lineHeight: 1,
              }}
            >
              m
            </span>
          </div>
          <h1
            style={{
              margin: 0,
              fontFamily: SERIF,
              color: "#F5EFE3",
              lineHeight: 0.9,
              fontWeight: 500,
              letterSpacing: ".01em",
              textShadow: "0 2px 30px rgba(20,16,12,.35)",
            }}
          >
            <span style={{ display: "block", fontSize: "clamp(46px,9vw,118px)" }}>
              Le Maison
            </span>
            <span
              style={{
                display: "block",
                fontSize: "clamp(46px,9vw,118px)",
                fontStyle: "italic",
              }}
            >
              de Margot
            </span>
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 560,
              color: "rgba(245,239,227,.94)",
              fontFamily: SANS,
              fontSize: "clamp(15px,1.7vw,20px)",
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: ".01em",
            }}
          >
            {tr(
              "Nel cuore del centro storico di Monopoli — il mare, le piazze e il porto, tutto a pochi passi.",
              "In the heart of Monopoli's old town — the sea, the squares and the harbour, all just a short walk away.",
              "Im Herzen der Altstadt von Monopoli — das Meer, die Plätze und der Hafen, alles nur wenige Schritte entfernt.",
              "W sercu starówki Monopoli — morze, place i port, wszystko o kilka kroków.",
            )}
          </p>
          <a
            href="#contatti"
            className="btn-teal"
            style={{
              marginTop: 6,
              display: "inline-block",
              background: "#1E6E73",
              color: "#F5EFE3",
              textDecoration: "none",
              fontFamily: SANS,
              fontSize: 13,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "16px 34px",
              borderRadius: 7,
            }}
          >
            {tr(
              "Verifica disponibilità",
              "Check availability",
              "Verfügbarkeit prüfen",
              "Sprawdź dostępność",
            )}
          </a>
        </div>
        <a
          href="#benvenuti"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 30,
            zIndex: 2,
            color: "rgba(245,239,227,.85)",
            textDecoration: "none",
            fontFamily: SANS,
            fontSize: 11,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>{tr("Scopri", "Scroll", "Entdecken", "Odkryj")}</span>
          <span
            className="cue-line"
            style={{
              display: "block",
              width: 1,
              height: 34,
              background: "linear-gradient(rgba(245,239,227,.8),transparent)",
              animation: "cue 2.4s ease-in-out infinite",
            }}
          />
        </a>
      </div>
    </section>
  );
}
