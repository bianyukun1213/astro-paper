import { z } from "astro/zod";

export interface AlpineStoreImages {
  maskedIds: string[];
  revealedIds: string[];
  registerMask(id: string): void;
  reveal(id: string): void;
  isRevealed(id: string): boolean;
}

export interface TideMeta {
  breakpoints: Record<string, string>;
}

export const HCardSchema = z.object({
  pName: z.string(),
  uPhoto: z.string(),
  uUrl: z.string(),
  uEmail: z.string(),
  pNote: z.string(),
});

export type HCard = z.infer<typeof HCardSchema>;

export const HAdrSchema = z.object({
  pStreetAddress: z.string(),
  pExtendedAddress: z.string().optional(),
  pLocality: z.string(),
  pRegion: z.string(),
  pCountryName: z.string(),
  pLongitude: z.number().optional(),
  pLatitude: z.number().optional(),
  pAltitude: z.number().optional(),
});

export type HAdr = z.infer<typeof HAdrSchema>;
