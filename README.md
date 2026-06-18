# Handoff: La Maison de Margot — Boutique Rental Landing Page

## Overview
A single-page, responsive marketing site for **La Maison de Margot**, a design-led one-apartment vacation rental in the centro storico of Monopoli, Puglia (Italy). The page tells an editorial, boutique story (not a generic listing) and drives toward one action: requesting/booking a stay. Primary language is **Italian**, with a live **IT/EN toggle**. Mobile-first.

Address used throughout: **Via Tenente Vasco 4, 70043 Monopoli (BA), Italia**.

---

## About the Design Files
The files in `reference/` are a **design reference created as a single HTML "Design Component"** (`La Maison de Margot.dc.html`) — a working prototype showing intended look, copy, and behavior. **It is not production code to copy directly.**

> ⚠️ The `.dc.html` file depends on a proprietary runtime (`<x-dc>`, `support.js`, `style-hover`, `data-reveal`, `data-en`, `{{ }}` bindings). **Do not port that runtime.** Read the file as a visual + behavioral spec and **rebuild it as an idiomatic React app** using your team's stack and patterns. All styling in the prototype is inline; in React, translate it to whatever your codebase already uses (CSS Modules, Tailwind, styled-components, vanilla-extract — your call). The design tokens below are the source of truth.

The `reference/assets/` folder contains all photography, ready to drop into `public/` or import.

## Fidelity
**High-fidelity (hifi).** Final colors, type, spacing, imagery, copy, and interactions are all decided. Recreate the UI faithfully. Exact hex values, fonts, and behavior are documented below; where a measurement isn't listed, match the reference file visually.

---

## Recommended React Setup
- **Framework:** Vite + React, or Next.js (App Router) if you want SSR/SEO — a marketing site benefits from SSR/meta tags, so **Next.js is the slightly better fit**.
- **Fonts:** Google Fonts — **Cormorant** (display serif; weights 400/500/600, plus italics) and **Mulish** (body sans; weights 300/400/500/600/700). With Next.js use `next/font/google`.
- **i18n:** A simple two-locale dictionary is enough (IT default, EN toggle). No need for a heavy i18n lib — a context provider with `it`/`en` string maps works. (Next.js: `next-intl` or built-in i18n routing if you prefer.)
- **Images:** Use `next/image` (or your image component) for the photography; most shots are large. Hero/parallax images should be `priority`/eager.
- **Animation:** Scroll-reveal and parallax are light; plain `IntersectionObserver` + a scroll listener (as in the prototype) or a small lib like Framer Motion both work.
- **Suggested component tree:**
  ```
  <App>
    <LangProvider>            // IT/EN context
      <Header/>               // fixed; transparent→solid on scroll
      <MobileMenuOverlay/>    // full-screen nav
      <Hero/>                 // 3 selectable variants (see note)
      <Welcome/>              // "Benvenuti"
      <Apartment/>            // gallery + amenities  (#appartamento)
      <Location/>             // walking-times list + radial map (#posizione)
      <TealQuote/>            // full-bleed teal moment
      <Monopoli/>             // editorial photo grid (#monopoli)
      <Experiences/>          // featured tile + 6 cards (#esperienze)
      <SeasidePool/>          // Bellavista Suite (#bar)
      <GettingHere/>          // 3 steps + ZTL note (#come-arrivare)
      <Reviews/>              // 3 testimonials (#recensioni)
      <Contact/>              // booking links + contacts (#contatti)
      <Footer/>
      <Lightbox/>             // shared gallery modal
    </LangProvider>
  </App>
  ```
  > **Hero variants:** the prototype includes a floating dev-only switcher to preview 3 hero directions (Tramonto / Editoriale / Notturno). **Ship only ONE** — default is **Tramonto** (full-bleed sunset). The other two are documented under "Hero" for reference; drop the switcher entirely.

---

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `bone` (base bg) | `#F5EFE3` | Page background, light sections, text on dark |
| `sand-card` | `#FBF7EE` | Card backgrounds (experiences, contact form, reviews on light) |
| `sea-mist` (tinted band) | `#E3EDEA` | Alternating section background (Apartment, Experiences) |
| `ink` (primary text) | `#14323A` | Headings, body emphasis (deep teal-navy) |
| `ink-soft` | `#27424A` | Secondary text on light |
| `body-text` | `#3C5158` | Paragraph body on light |
| `teal` (accent / CTA) | `#1E6E73` | Primary buttons, eyebrows, links, accents |
| `teal-deep` (hover) | `#185B60` | CTA hover |
| `teal-block` | `#1A535A` | The single full-bleed teal quote section + contact icon circles |
| `dark-section` | `#143A42` | Reviews section bg |
| `dark-footer` | `#0E2A30` | Footer bg |
| `terracotta` (secondary accent) | `#A8542E` / `#C0673D` | Used **sparingly**: section eyebrows on some sections, map pin, "01/02/03" numerals |
| `gold` (on dark) | `#C0894F` / `#C0894F` | Eyebrows/labels on dark teal sections |
| `sage-line` | `#8CA09A` | Botanical sprig motif, map rings |
| `placeholder-stripe` | `#d8e6e1` / `#cbded8` | (Legacy striped placeholders — no longer used; all cards now have photos) |

> **Palette intent:** sun-washed Adriatic Mediterranean. Bone/ivory base (whitewashed-wall feel), teal-led, deep teal-navy ink instead of black, terracotta as a *small* warm counterpoint. Avoid cold whites and bright beach-blue.

### Typography
- **Display:** `Cormorant`, serif. Headings use weight **500** (some 600); large headlines often mix roman + *italic* on separate lines. `letter-spacing: -0.01em` on big headings; `line-height` ~`1.02–1.18`.
- **Body / UI:** `Mulish`, sans-serif. Body weight **300** (light) for paragraphs; **600** for eyebrows/labels/buttons.
- **Eyebrows / labels / buttons:** Mulish, 11–13px, `letter-spacing: .2em–.3em`, `text-transform: uppercase`, weight 600.
- **Type scale (clamp-based, responsive):**
  - Hero H1: `clamp(46px, 9vw, 118px)` Cormorant 500
  - Section H2: `clamp(30px, 4.4vw, 62px)` Cormorant 500
  - Card H3: `22–25px` Cormorant 600
  - Body: `15–19px` Mulish 300, `line-height 1.7–1.85`
  - Eyebrow: `12px` Mulish 600 uppercase
  - **Minimum body text 14px.**

### Spacing & layout
- Section vertical padding: `clamp(72px, 10vh, 130px)`; horizontal: `clamp(24px, 6vw, 90px)`.
- Content max-widths: `1100–1200px`, centered.
- Grid gaps: `14–18px` (cards/gallery), `clamp(40px, 6vw, 80px)` (two-column splits).
- `scroll-margin-top: 90px` on every anchored section (for fixed header).

### Radius & shadow
- Card radius: `4–6px` (small, refined — not pill-round). Buttons: `2–7px`. Pills/chips/badges: `30px`.
- Card shadow (rest): none or subtle; **hover**: `0 24px 50px rgba(30,95,95,.16)`.
- Big elevated panels (form, map): `0 30px 70px rgba(30,95,95,.14–.16)`.

### Motion
- **Scroll reveal:** elements fade+rise on entering viewport. Keyframe `revealUp`: `opacity 0→1`, `translateY(28px→0)`, `0.95s cubic-bezier(.2,.7,.2,1)`, with optional stagger delays (`60/80/120/140ms`). Trigger via `IntersectionObserver` (threshold ~0.12, `rootMargin: 0px 0px -8% 0px`), reveal once.
- **Parallax:** hero/teal images translate vertically on scroll: `translate3d(0, scrollY * factor, 0)`, factors `0.08–0.22`. Use a passive scroll listener; respect `prefers-reduced-motion` (disable).
- **Hover:** image zoom `scale(1.04–1.06)` over `.8s`; cards lift `translateY(-6px)`; buttons lift `translateY(-2px)` + color/shadow shift, `.3s`.
- **Scroll-cue line** under hero: gentle 2.4s loop (`cue` keyframe).

---

## Header (fixed)
- Position fixed, full width, `z-index: 60`. Starts **transparent** over the hero with a top gradient scrim `linear-gradient(180deg, rgba(20,34,28,.45), transparent)`; text/icons are ivory `#F5EFE3`.
- **On scroll past 80px:** background becomes `rgba(245,239,227,.95)` + `backdrop-filter: blur(10px)` + hairline bottom shadow; padding shrinks; all header text flips to ink `#14323A`.
- Left: **Menu** button (hamburger: two short bars + label). Center: wordmark **"la maison *de margot*"** (Cormorant, "de margot" italic). Right: **IT / EN** toggle + **Prenota** button.
- **Prenota button (header):** soft, blended pill — `background: rgba(30,110,115,.14)`, `1px solid rgba(30,110,115,.42)`, `border-radius: 30px`, `backdrop-filter: blur(6px)`; hover deepens fill to `rgba(30,110,115,.3)` + lift. Text color follows the header (ivory over hero, ink when scrolled). Anchors to `#contatti`.

## Mobile/Full Menu Overlay
- Full-screen `#1B2C23`→ use `#143A42`-family dark teal, ivory text, `z-index: 90`, fades in.
- Top: wordmark + round close (×) button (`1px` ivory border, hover tint).
- Center: large Cormorant nav links (`clamp(34px,6vw,64px)`), some italic, hover → gold `#C0894F` + slight left padding shift. Links: L'appartamento, Posizione — tutto a piedi, Monopoli & dintorni, Esperienze, Come raggiungerci, Prenota & contatti.
- Bottom: address + WhatsApp/Instagram/Email text links.
- Closes on link click and on Escape. Locks body scroll while open.

---

## Sections

### 1. Hero (`#top`) — DEFAULT: "Tramonto"
- Full-viewport (`100svh`), full-bleed image `assets/monopoli-tramonto.jpg`, **parallax factor 0.22**.
- Overlay scrim: `linear-gradient(180deg, rgba(28,28,30,.34) 0%, rgba(28,28,30,.12) 38%, rgba(40,30,24,.5) 100%)`.
- Centered stack (reveal on load): circular **"m" monogram** (72px circle, `1px` ivory border, Cormorant italic), then H1 **"la maison" / "*de margot*"** (two lines, second italic, `clamp(46px,9vw,118px)`, ivory, soft text-shadow), payoff line, and a **terracotta CTA** "Verifica disponibilità".
- Bottom-center scroll cue: "Scopri" + animated 1px line.
- **Hero CTA button (on-image):** `background: #C0673D` (terracotta) hover `#A8542E`, ivory text, uppercase `.22em`, padding `16px 34px`, radius `2px`, lift on hover. *(Note: header CTA is teal/blended; the hero's primary CTA is terracotta for punch over the photo. Keep this distinction.)*
- Payoff IT: *"Nel cuore del centro storico di Monopoli — il mare, le piazze e il porto, tutto a pochi passi."* EN: *"In the heart of Monopoli's old town — the sea, the squares and the harbour, all just a short walk away."*

**Alternate hero directions (reference only — do not ship unless chosen):**
- *Editoriale:* split layout, bone left column with eyebrow + H1 + dual CTAs, image right (`assets/monopoli-1.jpg`, parallax 0.12). Light/airy.
- *Notturno:* full-bleed `assets/piazza-notte.jpg` (parallax 0.18), content bottom-left, monogram + eyebrow + single-line wordmark + CTA. Dark/evening.

### 2. Benvenuti (`#benvenuti`)
- Bone bg, centered, max-width ~880px. Botanical **olive-sprig SVG divider** (sage), eyebrow "Benvenuti" (terracotta), large Cormorant H2, one body paragraph. Pure editorial intro, no image.
- The olive sprig is a simple inline SVG (a horizontal stem with small leaf ellipses + two berries). Reuse it as a section divider/accent in several places (sage on light, gold on dark). It's allowed as a brand mark — keep it minimal.

### 3. L'appartamento (`#appartamento`)
- Sea-mist bg `#E3EDEA`. Header row: eyebrow + H2 "Una sola casa, curata fino all'ultimo dettaglio." + intro paragraph (right).
- **Gallery:** CSS grid, `repeat(auto-fit, minmax(250px,1fr))`, `grid-auto-rows: 200px`, gap 14px. Some tiles span 2 cols / 2 rows (asymmetric editorial). Each tile is a **button** that opens the **Lightbox**; image zooms on hover. Tiles (in order, all in `assets/`): `soggiorno-1` (2×2), `soggiorno-2`, `camera-3`, `bagno-1`, `cucina-1`, `ingresso` (span 2 cols), `bagno-2` (span 2 rows), `camera-2`. Each has IT + EN caption (see file `data-cap` / `data-cap-en`).
- **Servizi inclusi:** two-column block — left: sprig + H3 "Servizi inclusi" + line; right: amenities `<ul>` in a responsive multi-column grid. Each item: a small **terracotta diamond** bullet (7px square rotated 45°) + label. Items: Wi-Fi in fibra, Aria condizionata, Cucina attrezzata, Macchina caffè Nespresso, Smart TV, Lavatrice, Biancheria e asciugamani, Set di cortesia, Asciugacapelli, Riscaldamento, Culla su richiesta, Self check-in.

### 4. Posizione — tutto a piedi (`#posizione`)
- Bone bg. Two columns: **left = radial "map"**, **right = walking-times list**.
- **Radial map:** a square panel, radial sand gradient bg, an inline SVG of concentric sage rings + spokes to 5 labeled dots (Piazza V.E. II, Porto Antico, Cala Porta Vecchia, Cattedrale, Castello Carlo V). Center: a **terracotta map pin** (`#C2693F`, teardrop = 18px square, `border-radius:50% 50% 50% 0`, `rotate(-45deg)`) + an ink label chip "Via Tenente Vasco 4". This is stylized/illustrative, **not** a real map — you may swap for a real map (Mapbox/Leaflet) if desired, but keep the pin at the address.
- **List:** eyebrow + H2 + intro, then a label "A piedi · indicativi" and a dotted-leader list (place ……… time). Times in Cormorant italic teal. Data (label these "a piedi, indicativi"):
  - Piazza Vittorio Emanuele II / Villa Comunale — **2 min**
  - Piazza Garibaldi (cuore del centro storico) — **4 min**
  - Porto Antico (vecchio porto) — **5 min**
  - Cattedrale della Madia — **5 min**
  - Castello Carlo V — **7 min**
  - Cala Porta Vecchia (spiaggia in centro) — **7 min**
  - Stazione ferroviaria (treni da/per Bari) — **12 min**

### 5. Teal moment (full-bleed)
- Single bold contrast block, bg `#1A535A`, ivory text. Two columns: left = gold sprig + large Cormorant **blockquote** + attribution "— I padroni di casa di la maison de margot"; right = image `assets/soggiorno-3.jpg` (parallax 0.08, `object-position: center 20%`). This is the one deliberate full-bleed teal section — echoes the apartment's accent wall.
- Quote IT: *"Volevamo una casa che sapesse di Puglia e di presente — luce di calce, colore deciso, arte alle pareti. Una casa di cui consegnare le chiavi, insieme all'indirizzo giusto per cena."*

### 6. Monopoli & dintorni (`#monopoli`)
- Bone bg. Intro (eyebrow + H2 "Una città bianca, tra il mare e i trulli." + paragraph). Then an **editorial photo grid** (`repeat(auto-fit,minmax(240px,1fr))`, gap 16px) with mixed aspect ratios and gradient-overlaid Cormorant captions. Images used: `monopoli-2` (span 2, 16/10), `monopoli-porto` (4/5), plus additional shots present in assets (`centro-bianco`, `spiaggia-club`, `cala-1`, `finestra-mare`) — see reference file for exact placement/captions.
- Below: three day-trip blurbs with top hairline: **Polignano a Mare**, **Alberobello**, **Cale & spiagge**.

### 7. Esperienze speciali (`#esperienze`)
- Sea-mist bg `#E3EDEA`. Centered intro (terracotta eyebrow + H2 "Luoghi veri per cui vale la pena rallentare.").
- **Featured wide tile:** `<figure>`, min-height `clamp(320px,46vw,500px)`, image `assets/monopoli-tramonto.jpg` (hover zoom), left-side diagonal scrim, caption bottom-left: a translucent **distance chip** "Dal Porto Antico · 5 min a piedi" + Cormorant H3 "Tour in barca tra le grotte" + description.
- **Card grid:** `repeat(auto-fit, minmax(248px,1fr))`, gap 18px. Six `<article>` cards, each = image (4/3) with a **distance chip** absolutely positioned top-left (`background: rgba(20,50,58,.82)`, ivory, `30px` radius, 10px text) + body (Cormorant H3 + 1-line Mulish 300 description). Card hover: lift + shadow. The six (image → title → chip):
  1. `polignano.jpg` → **Polignano a Mare** → "15 min in auto"
  2. `spiaggia-1.jpg` → **Spiagge & cale** → "7 min a piedi"
  3. `alberobello.jpg` → **Alberobello, i trulli** → "35 min in auto"
  4. `piazza-notte.jpg` → **Sere nel centro storico** → "sull'uscio di casa"
  5. `castellana.jpg` → **Grotte di Castellana** → "25 min in auto"
  6. `masseria.jpg` → **Degustazione in masseria** → "20 min in auto"
- All six have IT + EN copy (see reference `data-en`).

### 8. Il bar sul mare (`#bar`)
- Bone bg. Header row: eyebrow "Il bar sul mare" + H2 "Un aperitivo con i piedi sull'acqua." + right column with description naming **Bellavista Suite** and a pill link "Bellavista Suite · Via San Vito 11" → `https://bellavistamonopoli.it` (hover fills teal).
- A full-width hero image (21/9, `assets/bar-pool-3.jpg`, opens lightbox) then a 4-up grid of pool/sea images (`bar-pool-1`, `bar-pool-2`, `bar-pool-vista`, `bar-pool-jacuzzi`), each opens the lightbox.

### 9. Come raggiungerci (`#come-arrivare`)
- Bone bg. Eyebrow + H2 "Facile arrivare, ancora più facile restare." Then a responsive grid of steps with large Cormorant-italic terracotta numerals:
  - **01 In treno** — direct trains from Bari to Monopoli station, ~12 min on foot from the apartment.
  - **02 NCC & taxi** — private transfer from Bari airport/station on request.
  - **03 In auto** — compact car ideal for day trips; park outside the old town and walk in.
  - **ZTL block** (teal `#1A535A` card, ivory): centro storico is a limited-traffic zone — arrange a transfer or park outside and walk.

### 10. Cosa dicono di noi (`#recensioni`)
- Dark bg `#143A42`, ivory text. Centered eyebrow (gold) + H2 "Le parole di chi è stato qui." Three testimonials in a row, each: gold ★★★★★, Cormorant-italic blockquote, attribution. (Giulia & Marco — Milano; Sophie — Lyon; Andreas — Berlin.) Top hairline on each.

### 11. Prenota / Contatti (`#contatti`)
- Bone bg. Single full-width column (max-width 1120px). Eyebrow (terracotta) + H2 "Richiedi le tue date." + intro line.
- **Booking buttons** (two, flex, wrap, gap 12px, each `flex:1; min-width:150px`, radius 7px):
  - **Prenota su Booking** — filled teal `#1E6E73`, hover `#185B60` + lift + shadow.
  - **Prenota su Airbnb** — outline (`1px solid rgba(30,110,115,.5)`, teal text), hover fills teal + ivory text + lift + shadow.
  - Both currently `href="#"` (placeholders). Note "Link diretti di prenotazione — in arrivo" below. **Wire to real Booking/Airbnb URLs.**
- **Contacts row** (flex wrap, gap `18px 48px`): WhatsApp (`https://wa.me/...`), Email (`mailto:`), Address — each with a `38px` teal `#1A535A` circle icon. Then **Instagram** and **Facebook** as pill buttons with inline SVG glyph icons + label, hover fills ink. All numbers/handles are placeholders (`+39 000 000 0000`, `ciao@lamaisondemargot.it`) — **replace with real values.**
- *(The original layout had an availability form; it was intentionally removed in favor of direct booking links. If you want a form back, route it to email/WhatsApp.)*

### 12. Footer
- Dark `#0E2A30`, ivory `.78` text. Four columns: brand (monogram circle + wordmark), **Naviga** links (Home, L'appartamento, Prenota, Privacy, Cookie), **Contatti** (address, email, phone), **Seguici** (Ig/Fb round icon links). Bottom bar: "© 2026 la maison de margot · Monopoli, Puglia" + "Fatto con cura nel centro storico". Gold section labels.

---

## Shared: Lightbox
- Full-screen modal (`z-index: 120`, bg `rgba(18,22,20,.94)`), fades in. Centered contained image (`max-height: 80vh`) + Cormorant-italic caption below. Controls: round close (×, top-right), prev (‹) / next (›) arrows. Keyboard: Esc closes, ←/→ navigate. Click backdrop to close. Locks body scroll while open.
- The lightbox shares **one image list** built from every gallery tile (apartment gallery + seaside-pool images). Caption is locale-aware (IT default, EN when toggled). Implement as a single context/portal fed by all `data-full`/caption pairs.

---

## Interactions & Behavior (summary)
- **IT/EN toggle:** swaps all visible copy + input placeholders + lightbox captions live. No reload. IT is default. Implement as a locale context; store strings as `{ it, en }` pairs per key.
- **Header solidify on scroll** (threshold 80px), with text-color flip.
- **Menu overlay** open/close, body-scroll lock, Esc to close.
- **Scroll reveal** (IntersectionObserver, once) with stagger delays.
- **Parallax** on hero + teal image (scroll listener; disable under `prefers-reduced-motion`).
- **Image hover zoom**, **card hover lift**, **button hover** states as specified.
- **Lightbox** open/navigate/close (click + keyboard).
- **Booking buttons / contacts:** currently placeholders — wire real URLs.

## State (React)
- `locale: 'it' | 'en'` (context).
- `menuOpen: boolean`.
- `headerSolid: boolean` (from scroll).
- `lightbox: { open: boolean, index: number }` + the image list.
- `activeHero` — only if you keep the multi-hero switcher (recommend NOT; ship one hero).
- No data fetching required for the static marketing page (booking links go to external Booking/Airbnb).

## Assets (`reference/assets/`)
All JPGs. Real, in-use photography:
- **Apartment (owner's photos):** `soggiorno-1`, `soggiorno-2`, `soggiorno-3`, `camera-2`, `camera-3`, `cucina-1`, `bagno-1`, `bagno-2`, `ingresso`.
- **Monopoli (owner's photos):** `monopoli-1`, `monopoli-2`, `monopoli-porto`, `monopoli-tramonto`, `piazza-notte`. (Plus any of `centro-bianco`, `spiaggia-1`, `spiaggia-club`, `cala-1`, `finestra-mare` referenced in the Monopoli/Experiences sections — see HTML.)
- **Experiences (licensed Unsplash + owner):** `polignano.jpg`, `alberobello.jpg`, `castellana.jpg`, `masseria.jpg` (Unsplash, free commercial license); `spiaggia-1`, `piazza-notte` (owner).
- **Seaside pool (Bellavista Suite):** `bar-pool-1`, `bar-pool-2`, `bar-pool-3`, `bar-pool-vista`, `bar-pool-jacuzzi`.

> **Licensing note:** the building **exterior photo is still pending** (was a placeholder, now removed). Confirm commercial-use rights for any third-party photos before launch; the four Unsplash experience shots and the owner's own photos are cleared. The Bellavista Suite pool images and that brand link should be used with the venue's blessing.

## Files
- `reference/La Maison de Margot.dc.html` — the full design prototype (read as spec; do not ship the runtime).
- `reference/assets/` — all photography.

## Brand voice (for any new copy)
Intimate, warm, slow-living, French–Italian boutique. Italian primary. Tells a small story; never corporate or listing-like. Emphasize the **central, fully walkable** position. Keep terracotta and the olive-sprig motif as restrained accents, not decoration.
