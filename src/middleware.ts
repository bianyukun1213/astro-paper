import { defineMiddleware } from "astro:middleware";

// bug，使用动态路由和 trailingSlash: always 时，生成的路由末尾带 /。暂时使用这种方式来缓解问题，使得去掉 / 也能访问 rss 数据。
export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.endsWith("/rss.xml")) {
    return context.rewrite(context.url.pathname + "/");
  }
  return next();
});
