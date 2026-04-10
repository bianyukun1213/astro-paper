import { generateOgImageForSite } from "@/utils/generateOgImages";
import { getLocales, type Locale } from "@/utils/locale";
import type { APIRoute, GetStaticPaths } from "astro";

export const getStaticPaths = (async () => {
  const locales = getLocales();
  return locales.map(locale => ({ params: { locale } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const buffer = await generateOgImageForSite(params.locale as Locale);
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
