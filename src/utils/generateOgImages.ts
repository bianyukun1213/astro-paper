import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import type { Locale } from "./locale";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(
  post: CollectionEntry<"blog">,
  locale: Locale
) {
  const svg = await postOgImage(post, locale);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite(locale: Locale) {
  const svg = await siteOgImage(locale);
  return svgBufferToPngBuffer(svg);
}
