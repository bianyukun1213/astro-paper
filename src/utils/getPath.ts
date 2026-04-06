import { BLOG_PATH } from "@/content.config";
import { getLocaleFromFilePath, getLocalizedUrl } from "./locale";
import { slugifyStr } from "./slugify";

// todo: bug: http://localhost:4321/zh-CN/posts/zh-cn/customizing-astropaper-theme-color-schemes/
// http://localhost:4321/en-US/posts/en-us/customizing-astropaper-theme-color-schemes/


/**
 * Get full path of a blog post
 * @param displayId - displayId of the blog post
 * @param filePath - the blog post full file location
 * @param includeBase - whether to include `/posts` in return value
 * @returns blog post path
 */
export function getPath(
  displayId: string,
  filePath: string | undefined,
  includeBase = true
) {
  let pathSegments = filePath
    ?.replace(BLOG_PATH, "")
    .split("/")
    .filter(path => path !== "") // remove empty string in the segments ["", "other-path"] <- empty string will be removed
    .filter(path => !path.startsWith("_")) // exclude directories start with underscore "_"
    .slice(0, -1); // remove the last segment_ file name_ since it's unnecessary
  if (!pathSegments) pathSegments = [];
  const locale = getLocaleFromFilePath(filePath);
  if (locale) {
    pathSegments = pathSegments.slice(1);
  }
  pathSegments = pathSegments.map(segment => slugifyStr(segment)); // slugify each segment path

  let basePath = "";
  if (includeBase) {
    basePath = locale
      ? getLocalizedUrl(locale, "posts").slice(0, -1) // remove the trailing slash added by getLocalizedUrl
      : "/posts";
  }

  // If not inside the sub-dir, simply return the file path
  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, displayId].join("/") + "/";
  }

  return [basePath, ...pathSegments, displayId].join("/") + "/";
}
