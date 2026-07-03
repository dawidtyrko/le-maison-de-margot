"use client";

import { useEffect, useState } from "react";
import { useApp, LANGS } from "./Providers";
import { PumoMark } from "./PumoMark";
import { SANS, SERIF } from "@/lib/ui";

export function Header() {
  const { lang, setLang, tr, setMenuOpen } = useApp();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ink = solid ? "#14323A" : "#F5EFE3";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: solid
          ? "12px clamp(18px,4vw,54px)"
          : "20px clamp(18px,4vw,54px)",
        background: solid
          ? "rgba(245,239,227,.95)"
          : "linear-gradient(180deg,rgba(15,40,46,.45),rgba(15,40,46,0))",
        backdropFilter: solid ? "blur(10px)" : undefined,
        WebkitBackdropFilter: solid ? "blur(10px)" : undefined,
        boxShadow: solid ? "0 1px 0 rgba(20,50,58,.10)" : undefined,
        transition: "background .45s ease, padding .45s ease, box-shadow .45s ease",
      }}
    >
      <button
        onClick={() => setMenuOpen(true)}
        aria-label={tr("Apri il menu", "Open menu", "Menü öffnen", "Otwórz menu")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: ink,
          fontFamily: SANS,
          fontSize: 12,
          letterSpacing: ".26em",
          textTransform: "uppercase",
          fontWeight: 600,
          padding: "6px 0",
          transition: "color .45s ease",
        }}
      >
        <span
          style={{ display: "flex", flexDirection: "column", gap: 3, width: 20 }}
        >
          <span style={{ height: 1.5, background: "currentColor", display: "block" }} />
          <span
            style={{ height: 1.5, background: "currentColor", display: "block", width: 13 }}
          />
        </span>
        <span>{tr("Menu", "Menu", "Menü", "Menu")}</span>
      </button>

      <a
        href="#top"
        aria-label="Le Maison de Margot"
        style={{
          textDecoration: "none",
          color: ink,
          fontFamily: SERIF,
          fontSize: "clamp(17px,2vw,21px)",
          letterSpacing: ".04em",
          lineHeight: 1,
          display: "inline-flex",
          alignItems: "center",
          gap: 11,
          whiteSpace: "nowrap",
          transition: "color .45s ease",
        }}
      >
        <PumoMark height={30} />
        <span>
          Le Maison <span style={{ fontStyle: "italic" }}>de Margot</span>
        </span>
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(12px,2vw,22px)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            letterSpacing: ".12em",
            fontWeight: 600,
          }}
        >
          {LANGS.map((l, i) => (
            <span key={l.code} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              {i > 0 && <span style={{ color: ink, opacity: 0.4 }}>/</span>}
              <button
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                aria-label={l.label}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: ink,
                  opacity: lang === l.code ? 1 : 0.55,
                  padding: 2,
                  letterSpacing: ".12em",
                  transition: "color .45s ease, opacity .25s",
                }}
              >
                {l.label}
              </button>
            </span>
          ))}
        </div>

        <a
          href="#contatti"
          className="btn-prenota"
          style={{
            display: "inline-block",
            background: "rgba(30,110,115,.14)",
            color: ink,
            textDecoration: "none",
            fontSize: 12,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            fontWeight: 600,
            padding: "11px 22px",
            borderRadius: 30,
            border: "1px solid rgba(30,110,115,.42)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          {tr("Prenota", "Book", "Buchen", "Rezerwuj")}
        </a>
      </div>
    </header>
  );
}
