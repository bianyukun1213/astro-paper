import * as messages from '@/paraglide/messages';
import type { Locale } from '@/paraglide/runtime';
import { getRelativeLocaleUrlList } from 'astro:i18n';
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
    const paths = getRelativeLocaleUrlList('', {
        normalizeLocale: false
    });
    return paths.map((url) => {
        const locale = url.split('/')[1];
        return locale;
    });
}

/**
 * Returns a proxy object for accessing translations based on the given locale. The proxy intercepts property access on the messages object and, if the property is a function, it wraps it to include the locale in the options when called. This allows for dynamic translation retrieval based on the specified locale.
 * @param locale The locale to use for translations.
 * @returns A proxy object for accessing translations.
 */
export function useTranslations(locale: Locale) {
    return new Proxy(messages, {
        get(target, prop: keyof typeof messages) {
            const original = target[prop];
            if (typeof original === 'function') {
                type ParaglideMessageFn = (
                    inputs?: unknown,
                    options?: { locale?: Locale }
                ) => string;
                return (inputs?: unknown, options?: { locale?: Locale }) => {
                    return (original as ParaglideMessageFn)(inputs, {
                        locale,
                        ...options
                    });
                };
            }
            return original;
        }
    }) as typeof messages;
}

export type { Locale };

