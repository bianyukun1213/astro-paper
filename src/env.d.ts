interface Window {
  theme?: {
    themeValue: string;
    setPreference: () => void;
    reflectPreference: () => void;
    getTheme: () => string;
    setTheme: (val: string) => void;
  };
  m: import("@/paraglide/messages.js").m;
  setLocale: import("@/paraglide/runtime").SetLocaleFn;
}
