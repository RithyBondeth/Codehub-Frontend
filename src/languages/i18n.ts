import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./english/translation.json";
import khTranslation from "./khmer/translation.json";
import { useLanguageStore } from "../stores/language/language.store";

i18n
.use(initReactI18next)
.init({
    resources: {
        en: { translation: enTranslation },
        kh: { translation: khTranslation }
    },
    fallbackLng: "en",
    lng: useLanguageStore.getState().language,
    interpolation: {
        escapeValue: false,
    }
})

export default i18n