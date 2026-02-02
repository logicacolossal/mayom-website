import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./locales/en";
import { ptBR } from "./locales/pt-br";
import { ptPT } from "./locales/pt-pt";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      "pt-BR": ptBR,
      "pt-PT": ptPT,
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
