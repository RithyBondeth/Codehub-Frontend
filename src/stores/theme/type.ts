export type ThemeStoreState = {
    theme: "dark" | "light",
    toggleTheme: () => void,
    setTheme: (newTheme: "dark" | "light") => void
}