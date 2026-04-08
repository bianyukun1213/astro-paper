import { defineMiddleware } from "astro:middleware";

// `context` 和 `next` 会自动被类型化
export const onRequest = defineMiddleware((context, next) => {
  if (context.url.pathname.endsWith("/rss.xml")) {
    const newUrl = context.url;
    newUrl.hash = "";
    newUrl.search = "";
    newUrl.pathname += "/";
    console.log("aaa: " + newUrl.pathname);
    return next(newUrl.pathname);
  }
  return next();
});
