"use client";

import { useEffect } from "react";
import { useApp } from "./Providers";
import { lightboxImages, captionFor } from "@/lib/images";
import { SERIF } from "@/lib/ui";

export function Lightbox() {
  const {
    lang,
    tr,
    lightboxIndex,
    closeLightbox,
    nextLightbox,
    prevLightbox,
  } = useApp();

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextLightbox();
      else if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  if (lightboxIndex === null) return null;
  const img = lightboxImages[lightboxIndex];
  if (!img) return null;

  const ctrl: React.CSSProperties = {
    position: "absolute",
    border: "1px solid rgba(245,239,227,.4)",
    borderRadius: "50%",
    background: "none",
    color: "#F5EFE3",
    cursor: "pointer",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={tr("Galleria", "Gallery", "Galerie", "Galeria")}
      onClick={closeLightbox}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "rgba(18,22,20,.94)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "clamp(20px,5vw,70px)",
        animation: "fadeIn .25s ease both",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          closeLightbox();
        }}
        aria-label={tr("Chiudi", "Close", "Schließen", "Zamknij")}
        className="lb-ctrl"
        style={{
          ...ctrl,
          top: 22,
          right: 24,
          width: 48,
          height: 48,
          fontSize: 22,
          lineHeight: 1,
        }}
      >
        ×
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevLightbox();
        }}
        aria-label={tr("Precedente", "Previous", "Zurück", "Poprzednie")}
        className="lb-ctrl"
        style={{
          ...ctrl,
          left: 18,
          top: "50%",
          transform: "translateY(-50%)",
          width: 52,
          height: 52,
          borderColor: "rgba(245,239,227,.35)",
          fontSize: 22,
        }}
      >
        ‹
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextLightbox();
        }}
        aria-label={tr("Successiva", "Next", "Weiter", "Następne")}
        className="lb-ctrl"
        style={{
          ...ctrl,
          right: 18,
          top: "50%",
          transform: "translateY(-50%)",
          width: 52,
          height: 52,
          borderColor: "rgba(245,239,227,.35)",
          fontSize: 22,
        }}
      >
        ›
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={captionFor(img, lang)}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "80vh",
          objectFit: "contain",
          borderRadius: 3,
          boxShadow: "0 30px 80px rgba(0,0,0,.5)",
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          marginTop: 18,
          color: "rgba(245,239,227,.82)",
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "clamp(16px,2vw,22px)",
          textAlign: "center",
        }}
      >
        {captionFor(img, lang)}
      </div>
    </div>
  );
}
