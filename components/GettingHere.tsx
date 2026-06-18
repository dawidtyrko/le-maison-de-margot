"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

const steps = [
  {
    num: "01",
    titleIt: "In treno",
    titleEn: "By train",
    titleDe: "Mit dem Zug",
    titlePl: "Pociągiem",
    descIt:
      "Treni diretti da Bari alla stazione di Monopoli — circa 12 minuti a piedi dall'appartamento.",
    descEn:
      "Direct trains from Bari to Monopoli station — about 12 minutes on foot from the apartment.",
    descDe:
      "Direkte Züge von Bari zum Bahnhof Monopoli — etwa 12 Minuten zu Fuß von der Wohnung.",
    descPl:
      "Bezpośrednie pociągi z Bari do stacji Monopoli — około 12 minut pieszo od apartamentu.",
  },
  {
    num: "02",
    titleIt: "NCC & taxi",
    titleEn: "Transfers & taxi",
    titleDe: "Transfers & Taxi",
    titlePl: "Transfery i taksówki",
    descIt:
      "Possiamo organizzare un transfer privato dall'aeroporto di Bari o dalla stazione — chiedi pure.",
    descEn:
      "We can arrange a private transfer from Bari airport or the station — just ask.",
    descDe:
      "Wir organisieren gern einen privaten Transfer vom Flughafen Bari oder vom Bahnhof — fragen Sie einfach.",
    descPl:
      "Możemy zorganizować prywatny transfer z lotniska w Bari lub z dworca — wystarczy zapytać.",
  },
  {
    num: "03",
    titleIt: "In auto",
    titleEn: "By car",
    titleDe: "Mit dem Auto",
    titlePl: "Samochodem",
    descIt:
      "Un'auto compatta è l'ideale per le gite. Parcheggia fuori dal centro storico e raggiungici a piedi.",
    descEn:
      "A compact car is ideal for day trips. Park outside the old town and walk in.",
    descDe:
      "Ein kompaktes Auto ist ideal für Ausflüge. Parken Sie außerhalb der Altstadt und kommen Sie zu Fuß zu uns.",
    descPl:
      "Kompaktowy samochód jest idealny na wycieczki. Zaparkuj poza starówką i dojdź do nas pieszo.",
  },
];

export function GettingHere() {
  const { tr } = useApp();

  return (
    <section
      id="come-arrivare"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal style={{ maxWidth: 560, marginBottom: "clamp(36px,5vw,54px)" }}>
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
            {tr("Come raggiungerci", "Getting here", "Anreise", "Jak dojechać")}
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
              "Facile arrivare, ancora più facile restare.",
              "Easy to reach, easier once you're here.",
              "Einfach anzureisen, noch einfacher zu bleiben.",
              "Łatwo dojechać, jeszcze łatwiej zostać.",
            )}
          </h2>
        </Reveal>

        <Reveal
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "clamp(22px,3vw,40px)",
          }}
        >
          {steps.map((s) => (
            <div key={s.num}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: 32,
                  color: "#C0673D",
                  marginBottom: 8,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontFamily: SERIF,
                  fontWeight: 600,
                  color: "#14323A",
                  fontSize: 23,
                }}
              >
                {tr(s.titleIt, s.titleEn, s.titleDe, s.titlePl)}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#3C5158",
                  fontFamily: SANS,
                  fontSize: 14.5,
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}
              >
                {tr(s.descIt, s.descEn, s.descDe, s.descPl)}
              </p>
            </div>
          ))}

          <div
            style={{
              background: "#1A535A",
              color: "#F5EFE3",
              borderRadius: 5,
              padding: 22,
            }}
          >
            <div
              style={{
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "#C0894F",
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              ZTL
            </div>
            <p
              style={{
                margin: 0,
                color: "rgba(245,239,227,.9)",
                fontFamily: SANS,
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              {tr(
                "Il centro storico è zona a traffico limitato (ZTL). Organizza un transfer o parcheggia fuori e cammina — ti inviamo indicazioni chiare.",
                "The centro storico is a limited-traffic zone (ZTL). Arrange a transfer or park outside and walk — we'll send clear directions.",
                "Die Altstadt ist eine verkehrsbeschränkte Zone (ZTL). Organisieren Sie einen Transfer oder parken Sie außerhalb und gehen Sie zu Fuß — wir senden Ihnen eine klare Wegbeschreibung.",
                "Starówka jest strefą ograniczonego ruchu (ZTL). Zorganizuj transfer lub zaparkuj na zewnątrz i idź pieszo — prześlemy ci jasne wskazówki dojazdu.",
              )}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
