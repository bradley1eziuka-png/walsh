// Centralized imagery. Defaults live in /public/images (local, no external
// hosting). Override any key per client in site.config.json → branding.images.
import { DEFAULT_IMAGES } from "@/config/defaults";
import { siteConfig, type ImageKey } from "@/config";

export const IMAGES = { ...DEFAULT_IMAGES, ...siteConfig.branding.images } as Record<
  ImageKey,
  string
>;

// Responsive props for the optimized .webp service images (1400w + 700w
// variants, 1672×941 source). Width/height reserve space so nothing shifts.
// Other images (legacy .jpg, external URLs) pass through unchanged.
const FOCUS: Record<string, string> = {
  "exterior-painting": "35% 50%",
  "power-washing": "25% 50%",
  "deck-cleaning-staining": "40% 50%",
  "interior-painting": "50% 50%",
  "exterior-prep-repairs": "40% 50%",
  "about-walsh": "60% 50%",
};

export function imgProps(src: string, sizes = "(min-width: 1024px) 400px, 100vw") {
  const m = /^(.*\/([a-z-]+))\.webp$/.exec(src);
  if (!m) return { src };
  return {
    src,
    srcSet: `${m[1]}-700.webp 700w, ${src} 1400w`,
    sizes,
    width: 1400,
    height: 788,
    style: { objectPosition: FOCUS[m[2]!] ?? "50% 50%" },
  };
}
