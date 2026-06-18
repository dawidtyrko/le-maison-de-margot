"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { Sprig } from "./Sprig";
import { SANS, SERIF } from "@/lib/ui";

export function Welcome() {
  const { tr } = useApp();
  return (
    <section
      id="benvenuti"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(80px,12vh,150px) clamp(24px,6vw,90px)",
      }}
    >
      <Reveal
        style={{
          maxWidth: 880,
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
        }}
      >
        <Sprig width={150} height={30} color="#8CA09A" />
        <span
          style={{
            fontFamily: SANS,
            fontSize: 12,
            letterSpacing: ".32em",
            textTransform: "uppercase",
            color: "#A8542E",
            fontWeight: 600,
          }}
        >
          {tr("Benvenuti", "Welcome", "Willkommen", "Witamy")}
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontWeight: 500,
            color: "#14323A",
            fontSize: "clamp(30px,4.4vw,58px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            textWrap: "balance",
          }}
        >
          {tr(
            "Una piccola casa che racconta una storia, nel cuore bianco della Puglia.",
            "A small home with a story, in the white heart of Puglia.",
            "Ein kleines Zuhause mit einer Geschichte, im weißen Herzen Apuliens.",
            "Mały dom z historią, w białym sercu Apulii.",
          )}
        </h2>
        <p
          style={{
            margin: 0,
            maxWidth: 680,
            color: "#3C5158",
            fontFamily: SANS,
            fontSize: "clamp(16px,1.6vw,19px)",
            fontWeight: 300,
            lineHeight: 1.85,
          }}
        >
          {tr(
            "Le Maison de Margot non è un albergo, e non è soltanto un affitto: è una casa, pensata con cura, dove il design contemporaneo incontra la pietra sun-washed del centro storico. Ritratti pop-art, un tavolo in marmo verde, parquet di rovere e una parete verde-petrolio — e, fuori dalla porta, tutta Monopoli a piedi.",
            "Le Maison de Margot is not a hotel and not just a rental: it is a home, designed with care, where contemporary design meets the sun-washed stone of the centro storico. Pop-art portraits, a green-marble table, oak floors and a deep-teal wall — and outside the door, all of Monopoli on foot.",
            "Le Maison de Margot ist kein Hotel und nicht bloß eine Ferienwohnung: Es ist ein Zuhause, mit Sorgfalt gestaltet, wo zeitgenössisches Design auf den sonnengebleichten Stein der Altstadt trifft. Pop-Art-Porträts, ein Tisch aus grünem Marmor, Eichenparkett und eine petrolfarbene Wand — und vor der Tür ganz Monopoli zu Fuß.",
            "Le Maison de Margot to nie hotel ani zwykły wynajem: to dom zaprojektowany z troską, w którym współczesny design spotyka rozświetlony słońcem kamień starówki. Portrety pop-art, stół z zielonego marmuru, dębowa podłoga i ściana w kolorze morskiej zieleni — a za drzwiami całe Monopoli na piechotę.",
          )}
        </p>
      </Reveal>
    </section>
  );
}
