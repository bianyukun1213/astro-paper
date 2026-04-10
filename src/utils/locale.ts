import { DEFAULT_LOCALE } from "@/../astro.config";
import { BLOG_PATH } from "@/content.config";
import * as messages from "@/paraglide/messages";
import { getTextDirection, type Locale } from "@/paraglide/runtime";
import {
  getRelativeLocaleUrl as getRelativeLocaleUrlImpl,
  getRelativeLocaleUrlList,
} from "astro:i18n";

// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// export function cn(...inputs: ClassValue[]) {
//     return twMerge(clsx(inputs));
// }

/**
 * Returns a list of available locales based on the relative locale URL list. It uses Astro's i18n utility to get the list of locale-specific paths and extracts the locale from each path.
 * @returns An array of available locales.
 */
export function getLocales() {
  const paths = getRelativeLocaleUrlList("", {
    normalizeLocale: false,
  });
  return paths.map(url => {
    const locale = url.split("/")[1];
    return locale;
  });
}

/**
 * Returns the text direction for a given locale.
 * @param locale The locale to get the text direction for.
 * @returns The text direction ("ltr" or "rtl").
 */
export function getLocaleDir(locale: Locale) {
  return getTextDirection(locale);
}

/**
 * Returns a localized URL based on the given locale and path. It uses Astro's i18n utility to generate the URL for the specified locale and path, without normalizing the locale.
 * @param local The locale to use for the URL.
 * @param path The path to localize.
 * @returns The localized URL.
 */
export function getLocalizedUrl(local: Locale, path?: string) {
  return getRelativeLocaleUrlImpl(local, path, {
    normalizeLocale: false,
  });
}

/**
 * Get locale of a blog post
 * @param filePath - the blog post full file location
 * @returns locale, or default locale if locale is not found in the file path
 */
export function getLocaleFromFilePath(filePath: string | undefined): Locale {
  if (!filePath) {
    return DEFAULT_LOCALE;
  }
  const relative = filePath.replace(BLOG_PATH + "/", "");
  const firstSegment = relative.split("/")[0];
  if (getLocales().includes(firstSegment)) {
    return firstSegment as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Returns a proxy object for accessing translations based on the given locale. The proxy intercepts property access on the messages object and, if the property is a function, it wraps it to include the locale in the options when called. This allows for dynamic translation retrieval based on the specified locale.
 * @param locale The locale to use for translations.
 * @returns A proxy object for accessing translations.
 */
export function useTranslations(locale: Locale) {
  const messagesObj = { ...messages };
  return new Proxy(messagesObj, {
    get(target, prop: keyof typeof messages) {
      const original = target[prop];
      if (typeof original === "function") {
        type ParaglideMessageFn = (
          inputs?: unknown,
          options?: { locale?: Locale }
        ) => string;
        return (inputs?: unknown, options?: { locale?: Locale }) => {
          return (original as ParaglideMessageFn)(inputs, {
            locale,
            ...options,
          });
        };
      }
      return original;
    },
  }) as typeof messages;
}

export { DEFAULT_LOCALE };
export type { Locale };

