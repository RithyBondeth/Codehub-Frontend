import { create } from "zustand";
import { ThemeStoreState } from "./type";
import { persist } from "zustand/middleware";

export const useThemeStore = create<ThemeStoreState>()(persist((set) => ({
    theme: "light",
    toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    setTheme: (newTheme: "dark" | "light") => set(() => ({ theme: newTheme }))
}), {
    name: "theme-storage"
}))