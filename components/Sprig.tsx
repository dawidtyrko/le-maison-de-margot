// Olive-sprig brand divider: a horizontal stem with small leaf ellipses and two
// berries. Inherits color via currentColor (sage on light, gold on dark).
export function Sprig({
  width = 150,
  height = 30,
  color,
  style,
}: {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ color, display: "inline-flex", ...style }}
    >
      <svg width={width} height={height} viewBox="0 0 160 34" fill="none">
        <path
          d="M16 17C55 17 95 17 144 17"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <g fill="currentColor">
          <circle cx="78" cy="17" r="2" />
          <circle cx="86" cy="17" r="2" />
          <ellipse cx="48" cy="10" rx="8" ry="2.6" transform="rotate(-24 48 10)" />
          <ellipse cx="60" cy="24" rx="8" ry="2.6" transform="rotate(22 60 24)" />
          <ellipse cx="100" cy="10" rx="8" ry="2.6" transform="rotate(24 100 10)" />
          <ellipse cx="112" cy="24" rx="8" ry="2.6" transform="rotate(-22 112 24)" />
          <ellipse cx="30" cy="20" rx="7" ry="2.3" transform="rotate(18 30 20)" />
          <ellipse cx="130" cy="20" rx="7" ry="2.3" transform="rotate(-18 130 20)" />
        </g>
      </svg>
    </span>
  );
}
