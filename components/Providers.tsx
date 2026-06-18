"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { lightboxImages } from "@/lib/images";

export type Lang = "it" | "en" | "de" | "pl";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "pl", label: "PL" },
];

type AppContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  tr: (it: string, en: string, de?: string, pl?: string) => string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  lightboxIndex: number | null;
  openLightbox: (index: number) => void;
  closeLightbox: () => void;
  nextLightbox: () => void;
  prevLightbox: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function Providers({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // The active language is driven by the URL (/it, /en, /de, /pl). Switching
  // navigates to the matching locale route so each language has its own URL,
  // preserving the current section via the hash.
  const setLang = useCallback(
    (l: Lang) => {
      const rest = pathname.replace(/^\/(it|en|de|pl)(?=\/|$)/, "");
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.push(`/${l}${rest}${hash}`);
    },
    [router, pathname],
  );

  const tr = useCallback(
    (it: string, en: string, de?: string, pl?: string) => {
      switch (lang) {
        case "en":
          return en;
        case "de":
          return de ?? en;
        case "pl":
          return pl ?? en;
        default:
          return it;
      }
    },
    [lang],
  );

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i + 1) % lightboxImages.length,
      ),
    [],
  );
  const prevLightbox = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null
          ? i
          : (i - 1 + lightboxImages.length) % lightboxImages.length,
      ),
    [],
  );

  // Lock body scroll while menu or lightbox is open.
  useEffect(() => {
    const locked = menuOpen || lightboxIndex !== null;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxIndex]);

  // Reflect locale on <html lang>.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      tr,
      menuOpen,
      setMenuOpen,
      lightboxIndex,
      openLightbox,
      closeLightbox,
      nextLightbox,
      prevLightbox,
    }),
    [
      lang,
      setLang,
      tr,
      menuOpen,
      lightboxIndex,
      openLightbox,
      closeLightbox,
      nextLightbox,
      prevLightbox,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <Providers>");
  return ctx;
}
