"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { indexOfSrc } from "@/lib/images";

/**
 * A gallery image rendered as a <button> that opens the shared lightbox at the
 * image's index. The hover zoom comes from the `.tile*` CSS classes. Uses
 * next/image (fill) for automatic resizing + WebP.
 */
export function GalleryTile({
  src,
  alt,
  className = "tile",
  style,
  imgStyle,
  sizes = "(max-width: 768px) 100vw, 600px",
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  sizes?: string;
}) {
  const { openLightbox } = useApp();
  const index = indexOfSrc(src);

  return (
    <button
      type="button"
      onClick={() => index >= 0 && openLightbox(index)}
      className={className}
      style={{
        position: "relative",
        border: "none",
        padding: 0,
        cursor: "pointer",
        background: "#ddd",
        display: "block",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover", ...imgStyle }}
      />
    </button>
  );
}
