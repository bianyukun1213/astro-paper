import { SITE } from "@/config";
import { getPath } from "@/utils/getPath";
import { getPostsByLocale } from "@/utils/getPostsByLocale";
import getSortedPosts from "@/utils/getSortedPosts";
import { getLocales, getLocalizedUrl, useTranslations, type Locale } from "@/utils/locale";
import rss from "@astrojs/rss";
import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const getStaticPaths = (async () => {
  const locales = getLocales();
  return locales.map(locale => ({ params: { locale } }));
}) satisfies GetStaticPaths;

// bug，使用动态路由和 trailingSlash: always 时，生成的路由末尾带 /。
export async function GET({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const m = useTranslations(locale);
  const posts = await getCollection("blog");
  const localePosts = getPostsByLocale(posts, locale);
  const sortedPosts = getSortedPosts(localePosts);
  return rss({
    title: m.site_title(),
    description: m.site_desc(),
    site: new URL(getLocalizedUrl(locale), SITE.website).href,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: new URL(getPath(data.displayId ?? id, filePath), SITE.website).href,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
