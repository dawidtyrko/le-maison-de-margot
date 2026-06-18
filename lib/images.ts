// The single ordered image list shared by every gallery tile and the lightbox.
// Order follows the DOM: apartment gallery first, then the seaside-pool images.
import type { Lang } from "@/components/Providers";

export type GalleryImage = {
  src: string;
  capIt: string;
  capEn: string;
  capDe: string;
  capPl: string;
};

export const lightboxImages: GalleryImage[] = [
  // --- L'appartamento ---
  {
    src: "/assets/soggiorno-1.jpg",
    capIt: "Soggiorno — parete verde-petrolio e ritratti pop-art",
    capEn: "Living room — deep-teal wall and pop-art portraits",
    capDe: "Wohnzimmer — petrolfarbene Wand und Pop-Art-Porträts",
    capPl: "Salon — ściana w morskiej zieleni i portrety pop-art",
  },
  {
    src: "/assets/soggiorno-2.jpg",
    capIt: "Tavolo in marmo verde e cucina",
    capEn: "Green-marble table and kitchen",
    capDe: "Tisch aus grünem Marmor und Küche",
    capPl: "Stół z zielonego marmuru i kuchnia",
  },
  {
    src: "/assets/camera-3.jpg",
    capIt: "Camera matrimoniale",
    capEn: "Double bedroom",
    capDe: "Doppelschlafzimmer",
    capPl: "Sypialnia z łóżkiem małżeńskim",
  },
  {
    src: "/assets/bagno-1.jpg",
    capIt: "Bagno con specchio tondo",
    capEn: "Bathroom with round mirror",
    capDe: "Bad mit rundem Spiegel",
    capPl: "Łazienka z okrągłym lustrem",
  },
  {
    src: "/assets/cucina-1.jpg",
    capIt: "Cucina attrezzata",
    capEn: "Fully-equipped kitchen",
    capDe: "Voll ausgestattete Küche",
    capPl: "W pełni wyposażona kuchnia",
  },
  {
    src: "/assets/ingresso.jpg",
    capIt: "Ingresso e corridoio",
    capEn: "Entrance hallway",
    capDe: "Eingang und Flur",
    capPl: "Wejście i korytarz",
  },
  {
    src: "/assets/bagno-2.jpg",
    capIt: "Bagno — doccia e dettagli",
    capEn: "Bathroom — shower and details",
    capDe: "Bad — Dusche und Details",
    capPl: "Łazienka — prysznic i detale",
  },
  {
    src: "/assets/camera-2.jpg",
    capIt: "Camera — luce del mattino",
    capEn: "Bedroom — morning light",
    capDe: "Schlafzimmer — Morgenlicht",
    capPl: "Sypialnia — poranne światło",
  },
  // --- Il bar sul mare ---
  {
    src: "/assets/bar-pool-3.jpg",
    capIt: "Lettini, amache e l'aperitivo sull'acqua",
    capEn: "Loungers, hammocks and aperitivo over the water",
    capDe: "Liegen, Hängematten und Aperitivo über dem Wasser",
    capPl: "Leżaki, hamaki i aperitivo nad wodą",
  },
  {
    src: "/assets/bar-pool-1.jpg",
    capIt: "La piscina a sfioro sul mare",
    capEn: "The infinity pool over the sea",
    capDe: "Der Infinity-Pool über dem Meer",
    capPl: "Basen infinity nad morzem",
  },
  {
    src: "/assets/bar-pool-2.jpg",
    capIt: "Sedute e dettagli vista mare",
    capEn: "Sea-view seating and details",
    capDe: "Sitzplätze und Details mit Meerblick",
    capPl: "Miejsca do siedzenia i detale z widokiem na morze",
  },
  {
    src: "/assets/bar-pool-vista.jpg",
    capIt: "Piscina e orizzonte adriatico",
    capEn: "Pool and the Adriatic horizon",
    capDe: "Pool und der Horizont der Adria",
    capPl: "Basen i adriatycki horyzont",
  },
  {
    src: "/assets/bar-pool-jacuzzi.jpg",
    capIt: "Idromassaggio fronte mare",
    capEn: "Sea-front hot tub",
    capDe: "Whirlpool direkt am Meer",
    capPl: "Jacuzzi z widokiem na morze",
  },
];

// Locale-aware caption for a gallery image.
export const captionFor = (img: GalleryImage, lang: Lang) => {
  switch (lang) {
    case "en":
      return img.capEn;
    case "de":
      return img.capDe;
    case "pl":
      return img.capPl;
    default:
      return img.capIt;
  }
};

// Helper: find a lightbox index by image src (path).
export const indexOfSrc = (src: string) =>
  lightboxImages.findIndex((i) => i.src === src);
