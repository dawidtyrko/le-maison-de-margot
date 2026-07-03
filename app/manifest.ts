import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Margot",
    description:
      "Boutique design apartment in the old town of Monopoli, Puglia.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE3",
    theme_color: "#1A535A",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
