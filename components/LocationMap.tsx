"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Apartment location provided directly; landmark coordinates from OpenStreetMap.
const HOME: [number, number] = [40.952659825819396, 17.30087612383493]; // Via Tenente Vasco 4

type Poi = { name: string; pos: [number, number] };
const POIS: Poi[] = [
  { name: "Piazza V. E. II", pos: [40.95221, 17.30003] },
  { name: "Piazza Garibaldi", pos: [40.95318, 17.30336] },
  { name: "Porto Antico", pos: [40.953066142258024, 17.304037439837074] },
  { name: "Cattedrale", pos: [40.95088967879638, 17.30334619676063] },
  { name: "Castello Carlo V", pos: [40.95422, 17.30527] },
  { name: "Cala Porta Vecchia", pos: [40.9509, 17.30553] },
  { name: "Stazione", pos: [40.952103563211985, 17.292520411077966] },
];

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      zoomControl: true,
      scrollWheelZoom: false, // don't hijack page scroll
      attributionControl: true,
    });
    mapRef.current = map;

    // Drop Leaflet's default prefix (it carries a flag icon); keep the OSM +
    // CARTO credit, which the tile licence requires.
    map.attributionControl.setPrefix(false);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        subdomains: "abcd",
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      },
    ).addTo(map);

    // Landmark pins (teal dot + label).
    POIS.forEach((p) => {
      L.marker(p.pos, {
        icon: L.divIcon({
          className: "",
          iconSize: [0, 0],
          iconAnchor: [0, 0],
          html: `<span class="lmdm-poi"><i class="lmdm-dot"></i><b class="lmdm-label">${p.name}</b></span>`,
        }),
        keyboard: false,
      }).addTo(map);
    });

    // The apartment (terracotta teardrop pin + address chip).
    L.marker(HOME, {
      icon: L.divIcon({
        className: "",
        iconSize: [0, 0],
        iconAnchor: [0, 0],
        html: `<span class="lmdm-home"><i class="lmdm-pin"></i><b class="lmdm-chip">Via Tenente Vasco 4</b></span>`,
      }),
      zIndexOffset: 1000,
      keyboard: false,
    }).addTo(map);

    const bounds = L.latLngBounds([HOME, ...POIS.map((p) => p.pos)]);
    const refit = () => {
      map.invalidateSize();
      map.fitBounds(bounds, { padding: [52, 52], maxZoom: 17 });
    };

    // ResizeObserver fires once on observe with the real size — this is what
    // frames the pins correctly even if the panel was 0-sized at init.
    const ro = new ResizeObserver(() => refit());
    ro.observe(el);
    refit();

    return () => {
      ro.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Mappa di Monopoli con la posizione dell'appartamento e i luoghi principali a piedi"
      style={{ position: "absolute", inset: 0 }}
    />
  );
}
