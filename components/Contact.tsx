"use client";

import { useApp } from "./Providers";
import { Reveal } from "./Reveal";
import { SANS, SERIF } from "@/lib/ui";

const BOOKING_URL = "https://www.booking.com/Share-04ZIHgf";
const WHATSAPP_URL = "https://wa.me/393703366836";
const PHONE_DISPLAY = "+39 370 336 6836";
const EMAIL = "lamaisondemargot4@gmail.com";

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
                target="_blank"
                rel="noopener"
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
              <span
                aria-disabled="true"
                style={{
                  flex: 1,
                  minWidth: 150,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  background: "transparent",
                  color: "rgba(30,110,115,.5)",
                  fontFamily: SANS,
                  fontSize: 12,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "15px 18px",
                  borderRadius: 7,
                  border: "1px dashed rgba(30,110,115,.35)",
                  cursor: "default",
                }}
              >
                {tr(
                  "Airbnb — in arrivo",
                  "Airbnb — coming soon",
                  "Airbnb — in Kürze",
                  "Airbnb — wkrótce",
                )}
              </span>
            </div>
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
                <span style={eyebrowStyle}>WhatsApp</span>
                {PHONE_DISPLAY}
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
