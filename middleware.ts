import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["it", "en", "de", "pl"];
const DEFAULT_LOCALE = "it";

// Redirect locale-less paths (e.g. "/") to a locale, picking the best match
// from Accept-Language and falling back to Italian.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const accept = (req.headers.get("accept-language") || "").toLowerCase();
  const detected =
    LOCALES.find((l) => accept.startsWith(l) || accept.includes(`,${l}`)) ||
    LOCALES.find((l) => accept.includes(l)) ||
    DEFAULT_LOCALE;

  const url = req.nextUrl.clone();
  url.pathname = `/${detected}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals and files (those contain a dot).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
