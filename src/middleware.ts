import { defineMiddleware, sequence } from "astro:middleware";
import slugify from "slugify";

// bug，使用动态路由和 trailingSlash: always 时，生成的路由末尾带 /。暂时使用这种方式来缓解问题，使得去掉 / 也能访问 rss 数据和 og。
export const resRedirect = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;
  if (
    pathname.endsWith("/rss.xml") ||
    pathname.endsWith("/og.png") ||
    pathname.endsWith("/index.png")
  ) {
    return context.rewrite(pathname + "/");
  }
  return next();
});

export const imageProcessor = defineMiddleware(async (context, next) => {
  const response = await next();
  // 确保我们只处理 HTML 页面
  if (response.headers.get("content-type")?.includes("text/html")) {
    console.log("Processing HTML for image figure ids: ", context.url.pathname);
    let html = await response.text();
    const safeSlug = slugify(context.url.pathname);
    let imgCounter = 0;
    const figureRegex =
      /<figure([^>]*class="[^"]*tide-image-figure[^"]*"[^>]*)>/g;
    html = html.replace(figureRegex, (match, innerAttributes) => {
      const imageId = `${safeSlug}-img-${imgCounter++}`;
      return `<figure${innerAttributes} data-image-id="${imageId}">`;
    });
    return new Response(html, {
      status: response.status,
      headers: response.headers,
    });
  }
  return response;
});

export const onRequest = sequence(resRedirect, imageProcessor);
