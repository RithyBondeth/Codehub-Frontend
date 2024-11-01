import { create } from "zustand";
import { LanguageStoreState } from "./type";
import { persist } from "zustand/middleware";

export const useLanguageStore = create<LanguageStoreState>()(persist((set) => ({
    language: "kh",
    setLanguage: (lang: string) => {
        set({ language: lang })
    }
}), {
    name: "language-storage"
}))