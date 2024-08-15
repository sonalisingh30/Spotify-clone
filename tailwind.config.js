/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        balsamiq: ["Balsamiq Sans", "sans-serif"],
      },

      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        nav_bg: "#101010",
        background: "#000000",
        container_bg: "#121212",
        gray_text: "#A7A7A7",
        bg_more_gray: "#242424",
      },

      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
