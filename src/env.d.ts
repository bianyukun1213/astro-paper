interface Window {
  theme?: {
    themeValue: string;
    setPreference: () => void;
    reflectPreference: () => void;
    getTheme: () => string;
    setTheme: (val: string) => void;
  };
  Alpine: import("alpinejs").Alpine;
  tideMeta: import("@/utils/types").TideMeta;
  m: import("@/paraglide/messages.js").m;
  setLocale: import("@/paraglide/runtime").SetLocaleFn;
}

declare namespace App {
  interface Locals {
    localesOverride?: import("@/paraglide/runtime").Locale[];
  }
}
