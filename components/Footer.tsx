"use client";

import { useApp } from "./Providers";
import { SANS, SERIF } from "@/lib/ui";

const labelStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 11,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#C0894F",
  fontWeight: 600,
  marginBottom: 14,
};

const linkStyle: React.CSSProperties = {
  color: "rgba(245,239,227,.78)",
  textDecoration: "none",
};

export function Footer() {
  const { tr } = useApp();

  return (
    <footer
      style={{
        background: "#0E2A30",
        color: "rgba(245,239,227,.78)",
        fontFamily: SANS,
        padding: "clamp(54px,7vh,84px) clamp(24px,6vw,90px) 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 36,
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              width: 52,
              height: 52,
              border: "1px solid rgba(245,239,227,.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: 26,
              color: "#F5EFE3",
              flex: "none",
            }}
          >
            m
          </span>
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 24,
              color: "#F5EFE3",
              lineHeight: 1.05,
            }}
          >
            Le Maison
            <br />
            <span style={{ fontStyle: "italic" }}>de Margot</span>
          </span>
        </div>

        <div>
          <div style={labelStyle}>{tr("Naviga", "Explore", "Navigation", "Nawigacja")}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
            <a href="#top" className="txt-link" style={linkStyle}>
              {tr("Home", "Home", "Start", "Start")}
            </a>
            <a href="#appartamento" className="txt-link" style={linkStyle}>
              {tr("L'appartamento", "The apartment", "Die Wohnung", "Apartament")}
            </a>
            <a href="#contatti" className="txt-link" style={linkStyle}>
              {tr("Prenota", "Book", "Buchen", "Rezerwuj")}
            </a>
            <a href="#" className="txt-link" style={linkStyle}>
              Privacy
            </a>
            <a href="#" className="txt-link" style={linkStyle}>
              Cookie
            </a>
          </div>
        </div>

        <div>
          <div style={labelStyle}>{tr("Contatti", "Contact", "Kontakt", "Kontakt")}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 14 }}>
            <span>Via Tenente Vasco 4</span>
            <span>70043 Monopoli (BA), Italia</span>
            <a href="mailto:lamaisondemargot4@gmail.com" className="txt-link" style={linkStyle}>
              lamaisondemargot4@gmail.com
            </a>
            <span>+39 370 336 6836</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "40px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(245,239,227,.14)",
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "space-between",
          fontSize: 12,
          color: "rgba(245,239,227,.5)",
        }}
      >
        <span>© 2026 Le Maison de Margot · Monopoli, Puglia</span>
        <span>
          {tr(
            "Fatto con cura nel centro storico",
            "Made with care in the centro storico",
            "Mit Sorgfalt in der Altstadt gemacht",
            "Zrobione z troską na starówce",
          )}
        </span>
      </div>
    </footer>
  );
}
