import "react-i18next";
import ar from "../../localizations/ar/translation.json";
import en from "../../localizations/en/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      ar: typeof ar;
    };
  }
}
