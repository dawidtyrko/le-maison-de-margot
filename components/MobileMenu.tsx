"use client";

import { useEffect } from "react";
import { useApp, LANGS } from "./Providers";
import { SANS, SERIF } from "@/lib/ui";

type NavLink = {
  href: string;
  it: string;
  en: string;
  de: string;
  pl: string;
  italic?: boolean;
};

const links: NavLink[] = [
  {
    href: "#appartamento",
    it: "L'appartamento",
    en: "The apartment",
    de: "Die Wohnung",
    pl: "Apartament",
  },
  {
    href: "#posizione",
    it: "Posizione — tutto a piedi",
    en: "Location — all on foot",
    de: "Lage — alles zu Fuß",
    pl: "Lokalizacja — wszystko pieszo",
    italic: true,
  },
  {
    href: "#monopoli",
    it: "Monopoli & dintorni",
    en: "Monopoli & around",
    de: "Monopoli & Umgebung",
    pl: "Monopoli i okolice",
  },
  {
    href: "#esperienze",
    it: "Esperienze",
    en: "Experiences",
    de: "Erlebnisse",
    pl: "Doświadczenia",
  },
  {
    href: "#bar",
    it: "Il bar sul mare",
    en: "The seaside pool bar",
    de: "Die Bar am Meer",
    pl: "Bar nad morzem",
    italic: true,
  },
  {
    href: "#come-arrivare",
    it: "Come raggiungerci",
    en: "Getting here",
    de: "Anreise",
    pl: "Jak dojechać",
  },
  {
    href: "#contatti",
    it: "Prenota & contatti",
    en: "Book & contact",
    de: "Buchen & Kontakt",
    pl: "Rezerwacja i kontakt",
    italic: true,
  },
];

export function MobileMenu() {
  const { menuOpen, setMenuOpen, tr, lang, setLang } = useApp();

  // Esc closes.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  if (!menuOpen) return null;

  return (
    <nav
      aria-label={tr("Menu principale", "Main menu", "Hauptmenü", "Menu główne")}
      style={{ position: "fixed", inset: 0, zIndex: 90 }}
    >
      {/* backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(20,50,58,.14)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          animation: "fadeIn .3s ease both",
        }}
      />

      {/* popover card, anchored top-left under the header */}
      <div
        style={{
          position: "absolute",
          top: 72,
          left: "clamp(14px,4vw,50px)",
          width: "min(288px, calc(100vw - 28px))",
          background: "#FBF7EE",
          borderRadius: 12,
          boxShadow:
            "0 24px 60px rgba(20,50,58,.26), 0 2px 8px rgba(20,50,58,.12)",
          overflow: "hidden",
          transformOrigin: "top left",
          animation: "pop .3s cubic-bezier(.2,.85,.25,1) both",
        }}
      >
        {/* header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 16px 7px 18px",
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontSize: 10,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#1E6E73",
              fontWeight: 700,
            }}
          >
            {tr("Menu", "Menu", "Menü", "Menu")}
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label={tr("Chiudi il menu", "Close menu", "Menü schließen", "Zamknij menu")}
            className="menu-close"
            style={{
              background: "none",
              border: "none",
              color: "#27424A",
              cursor: "pointer",
              fontSize: 22,
              lineHeight: 1,
              opacity: 0.55,
              padding: "0 2px",
            }}
          >
            ×
          </button>
        </div>

        {/* links */}
        <div style={{ display: "flex", flexDirection: "column", padding: "2px 8px 8px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="menu-link"
              style={{
                display: "block",
                textDecoration: "none",
                color: "#14323A",
                fontFamily: SERIF,
                fontStyle: l.italic ? "italic" : "normal",
                fontSize: 21,
                fontWeight: 500,
                padding: "9px 12px",
                borderRadius: 8,
              }}
            >
              {tr(l.it, l.en, l.de, l.pl)}
            </a>
          ))}
        </div>

        {/* language switch — the header toggle is hidden on phones, so it
            lives here to keep all four languages reachable on mobile */}
        <div
          style={{
            borderTop: "1px solid rgba(30,95,95,.16)",
            padding: "11px 18px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              fontFamily: SANS,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#8a9ba0",
              fontWeight: 700,
            }}
          >
            {tr("Lingua", "Language", "Sprache", "Język")}
          </span>
          <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
            {LANGS.map((l, i) => (
              <span key={l.code} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                {i > 0 && <span style={{ color: "#c3cdc9" }}>/</span>}
                <button
                  onClick={() => {
                    setLang(l.code);
                    setMenuOpen(false);
                  }}
                  aria-pressed={lang === l.code}
                  aria-label={l.label}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: SANS,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    padding: "2px 3px",
                    color: lang === l.code ? "#1E6E73" : "#5C7173",
                    opacity: lang === l.code ? 1 : 0.6,
                  }}
                >
                  {l.label}
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* bottom: address + socials */}
        <div
          style={{
            borderTop: "1px solid rgba(30,95,95,.16)",
            padding: "13px 18px 15px",
            display: "flex",
            flexDirection: "column",
            gap: 7,
            color: "#5C7173",
            fontFamily: SANS,
            fontSize: 12,
            letterSpacing: ".02em",
          }}
        >
          <span>Via Tenente Vasco 4 · Monopoli</span>
          <span style={{ display: "inline-flex", gap: 16 }}>
            <a
              href="https://wa.me/393703366836"
              className="txt-link"
              style={{ color: "#1E6E73", textDecoration: "none", fontWeight: 600 }}
            >
              WhatsApp
            </a>
            <a
              href="mailto:lamaisondemargot4@gmail.com"
              className="txt-link"
              style={{ color: "#1E6E73", textDecoration: "none", fontWeight: 600 }}
            >
              Email
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
