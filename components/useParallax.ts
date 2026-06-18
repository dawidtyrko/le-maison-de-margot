"use client";

import { useEffect, useRef } from "react";

/**
 * Vertical parallax. As the section scrolls through the viewport the image
 * drifts vertically, bounded to ~`factor` of the section height so it never
 * reveals an edge. Passive listener, disabled under prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(factor: number) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      // 0 as the section's top reaches the bottom of the viewport,
      // 1 as the section's bottom leaves the top of the viewport.
      const scrolled = (vh - rect.top) / (vh + rect.height);
      const drift = Math.max(-1, Math.min(1, (scrolled - 0.5) * 2));
      const maxShift = rect.height * factor * 0.5;
      const y = drift * maxShift;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [factor]);

  return ref;
}
