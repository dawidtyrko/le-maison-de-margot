import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["it", "en", "de", "pl"];
const DEFAULT_LOCALE = "it";

// Permanently redirect locale-less paths (e.g. "/") to the default locale.
//
// We send a 308 (permanent) instead of the default 307 (temporary): a permanent
// redirect tells Google to consolidate all ranking signals onto the localised
// URL (/it) and treat it as the canonical home, rather than keeping the bare "/"
// as a competing duplicate — the cause of the "Duplicate, Google chose different
// canonical than user" state in Search Console.
//
// Note: this drops Accept-Language auto-detection for the bare root. Everyone
// lands on Italian first (the primary market) and picks their language with the
// in-page IT/EN/DE/PL switcher. A permanent redirect must always point to the
// same target, so it can't vary by header — and Google advises against
// header-based auto-redirects for exactly that reason.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Run on everything except Next internals and files (those contain a dot).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
