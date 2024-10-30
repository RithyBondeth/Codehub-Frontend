/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light", "dark"]
  },
  theme: {
    extend: {
      screens: {
        'phone-xl': { 'max': '480px' },
        'phone-lg': { 'max': '360px' },
        'phone-md': { 'max': '300px' },
        'phone-sm': { 'max': '260px' },
        'tablet-md': { 'max': '630px' },
        'tablet-sm': { 'max': '565px' },
        'tablet-lg': { 'max': '865px' },
        'tablet-xl': { 'max': '1050px' }
      },
      colors: { 
        "primary": "#FF5757",
        "secondary": "#3E4551",
        "dark": "#1D232A",
        "darklight": "#A6ADBB",
      },
      boxShadow: {
        '3d-primary': '5px 5px rgba(255, 87, 87, 0.4), 10px 10px rgba(255, 87, 87, 0.3), 15px 15px rgba(255, 87, 87, 0.2), 20px 20px rgba(255, 87, 87, 0.1), 25px 25px rgba(255, 87, 87, 0.05)',
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [daisyui],
}

