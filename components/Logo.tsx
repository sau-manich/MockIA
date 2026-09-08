const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Logo({ size = 32 }: { size?: number; color?: string; glyph?: string }) {
  return (
    <img
      src={`${BASE}/logoMockIA.png`}
      width={size}
      height={size}
      alt="MockIA"
      style={{ display: "block", flex: "0 0 auto", width: size, height: size, borderRadius: size / 2, objectFit: "cover" }}
    />
  );
}
