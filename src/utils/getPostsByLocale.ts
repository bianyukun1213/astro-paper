import type { CollectionEntry } from "astro:content";
import { getLocaleFromFilePath } from "./getPath";
import type { Locale } from "./locale";

/**
 * Get blog posts by locale
 * @param posts - list of all blog posts
 * @param locale - the locale to filter by
 * @returns list of blog posts that match the given locale
 */
export function getPostsByLocale(
  posts: CollectionEntry<"blog">[],
  locale: Locale
) {
  return posts.filter(post => {
    return getLocaleFromFilePath(post.filePath) === locale;
  });
}
