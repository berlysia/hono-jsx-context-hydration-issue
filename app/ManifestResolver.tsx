import type { Manifest } from "vite";

const MANIFEST = import.meta.glob("/dist/.vite/manifest.json", {
  eager: true,
}) as Record<string, { default: Manifest }>;
let defaultManifest: Manifest | null = null;
for (const manifestFile of Object.values(MANIFEST)) {
  if (manifestFile["default"]) {
    defaultManifest = manifestFile["default"];
    break;
  }
}

const BASE = import.meta.env.VITE_BASE_PATH ?? "/";

export default function ManifestResolver({
  src,
  async,
  prod,
  manifest,
  nonce,
  type,
}: {
  src: string;
  async?: boolean;
  prod?: boolean;
  manifest?: import("vite").Manifest;
  nonce?: string;
  type: "script" | "style";
}) {
  if (prod ?? import.meta.env.PROD) {
    const givenManifest = manifest ?? defaultManifest;
    const resolvedSrc =
      givenManifest && givenManifest[src.replace(/^\//, "")]?.file;
    const scriptSrc = resolvedSrc ? `${BASE}${resolvedSrc}` : src;

    if (type === "script") {
      return (
        <script src={scriptSrc} type="module" async={async} nonce={nonce} />
      );
    }
    return <link rel="stylesheet" href={scriptSrc} />;
  }
  if (type === "script") {
    return <script src={src} type="module" async={async} nonce={nonce} />;
  }
  return <link rel="stylesheet" href={src} />;
}
