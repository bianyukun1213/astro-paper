import { SITE } from "@/config";
import { generateOgImageForPost } from "@/utils/generateOgImages";
import { getPath } from "@/utils/getPath";
import { getLocaleFromFilePath, type Locale } from "@/utils/locale";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export const getStaticPaths = (async () => {
  if (!SITE.dynamicOgImage) {
    return [];
  }
  const posts = await getCollection(
    "blog",
    ({ data }) => !data.draft && !data.ogImage
  );
  return posts.map(post => {
    const postLocale = getLocaleFromFilePath(post.filePath);
    return {
      params: {
        displayId: getPath(
          post.data.displayId ?? post.id,
          post.filePath,
          false
        ),
        locale: postLocale,
      },
      props: post,
    };
  });
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params, props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const buffer = await generateOgImageForPost(
    props as CollectionEntry<"blog">,
    params.locale as Locale
  );
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
