"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

// Placeholders — wire to real Booking/Airbnb URLs and real contact details.
const BOOKING_URL = "#";
const AIRBNB_URL = "#";
const WHATSAPP_URL = "https://wa.me/390000000000";
const EMAIL = "ciao@lamaisondemargot.it";

const eyebrowStyle: React.CSSProperties = {
  display: "block",
  fontFamily: SANS,
  fontSize: 11,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#8a7c5e",
};

function IconCircle({ children, size = 12 }: { children: React.ReactNode; size?: number }) {
  return (
    <span
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "#1A535A",
        color: "#F5EFE3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size,
        letterSpacing: ".04em",
        flex: "none",
      }}
    >
      {children}
    </span>
  );
}

export function Contact() {
  const { tr } = useApp();

  return (
    <section
      id="contatti"
      style={{
        scrollMarginTop: 90,
        background: "#F5EFE3",
        padding: "clamp(72px,10vh,130px) clamp(24px,6vw,90px)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <Reveal>
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
              "Prenota / Contatti",
              "Book / contact",
              "Buchen / Kontakt",
              "Rezerwacja / kontakt",
            )}
          </span>
          <h2
            style={{
              margin: "14px 0 16px",
              fontFamily: SERIF,
              fontWeight: 500,
              color: "#14323A",
              fontSize: "clamp(32px,4.4vw,58px)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
            }}
          >
            {tr(
              "Richiedi le tue date.",
              "Request your dates.",
              "Fragen Sie Ihre Termine an.",
              "Zapytaj o swoje terminy.",
            )}
          </h2>
          <p
            style={{
              margin: "0 0 28px",
              color: "#3C5158",
              fontFamily: SANS,
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
          >
            {tr(
              "Raccontaci quando vorresti venire e ti risponderemo in fretta, via email o WhatsApp.",
              "Tell us when you'd like to come and we'll reply quickly, by email or WhatsApp.",
              "Sagen Sie uns, wann Sie kommen möchten, und wir antworten schnell, per E-Mail oder WhatsApp.",
              "Napisz nam, kiedy chciałbyś przyjechać, a szybko odpowiemy — e-mailem lub przez WhatsApp.",
            )}
          </p>

          {/* Booking buttons */}
          <div style={{ margin: "0 0 30px", maxWidth: 560 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                href={BOOKING_URL}
                className="btn-teal"
                style={{
                  flex: 1,
                  minWidth: 150,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  background: "#1E6E73",
                  color: "#F5EFE3",
                  textDecoration: "none",
                  fontFamily: SANS,
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "15px 18px",
                  borderRadius: 7,
                  border: "1px solid #1E6E73",
                }}
              >
                {tr(
                  "Prenota su Booking",
                  "Book on Booking",
                  "Auf Booking buchen",
                  "Rezerwuj na Booking",
                )}
              </a>
              <a
                href={AIRBNB_URL}
                className="btn-outline"
                style={{
                  flex: 1,
                  minWidth: 150,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  background: "transparent",
                  color: "#1E6E73",
                  textDecoration: "none",
                  fontFamily: SANS,
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "15px 18px",
                  borderRadius: 7,
                  border: "1px solid rgba(30,110,115,.5)",
                }}
              >
                {tr(
                  "Prenota su Airbnb",
                  "Book on Airbnb",
                  "Auf Airbnb buchen",
                  "Rezerwuj na Airbnb",
                )}
              </a>
            </div>
            <span
              style={{
                display: "block",
                marginTop: 11,
                fontFamily: SANS,
                fontSize: 11,
                letterSpacing: ".06em",
                color: "#8a7c5e",
              }}
            >
              {tr(
                "Link diretti di prenotazione — in arrivo",
                "Direct booking links — coming soon",
                "Direkte Buchungslinks — in Kürze",
                "Bezpośrednie linki rezerwacji — wkrótce",
              )}
            </span>
          </div>

          {/* Contacts */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px 48px" }}>
            <a
              href={WHATSAPP_URL}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                textDecoration: "none",
                color: "#14323A",
                fontFamily: SANS,
                fontSize: 15,
              }}
            >
              <IconCircle>Wa</IconCircle>
              <span>
                <span style={eyebrowStyle}>WhatsApp</span>+39 000 000 0000
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                textDecoration: "none",
                color: "#14323A",
                fontFamily: SANS,
                fontSize: 15,
              }}
            >
              <IconCircle>@</IconCircle>
              <span>
                <span style={eyebrowStyle}>Email</span>
                {EMAIL}
              </span>
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 13,
                color: "#14323A",
                fontFamily: SANS,
                fontSize: 15,
              }}
            >
              <IconCircle size={14}>◍</IconCircle>
              <span>
                <span style={eyebrowStyle}>{tr("Indirizzo", "Address", "Adresse", "Adres")}</span>
                Via Tenente Vasco 4 · 70043 Monopoli (BA)
              </span>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="social-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  height: 44,
                  padding: "0 18px 0 14px",
                  border: "1px solid rgba(20,50,58,.22)",
                  borderRadius: 30,
                  color: "#14323A",
                  textDecoration: "none",
                  fontFamily: SANS,
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5.4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="social-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  height: 44,
                  padding: "0 18px 0 14px",
                  border: "1px solid rgba(20,50,58,.22)",
                  borderRadius: 30,
                  color: "#14323A",
                  textDecoration: "none",
                  fontFamily: SANS,
                  fontSize: 12,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 8.5V7c0-.7.3-1 1-1h1.5V3H14c-2.2 0-3.5 1.3-3.5 3.6v1.9H8.5v3h2V21h3.5v-9.5h2.4l.4-3H14z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
