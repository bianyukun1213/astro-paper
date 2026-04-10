import { defineMiddleware } from "astro:middleware";

// bug，使用动态路由和 trailingSlash: always 时，生成的路由末尾带 /。暂时使用这种方式来缓解问题，使得去掉 / 也能访问 rss 数据和 og。
export const onRequest = defineMiddleware((context, next) => {
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
