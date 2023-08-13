/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Noto Sans JP", "sans-serif"],
    },
    screens: {
      xs: "640px",
      sm: "768px",
      md: "896px",
      lg: "960px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1350px",
      "4xl": "1400px",
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#333333",
        error: "#D14747",
        link: "#297A89",
        gray: {
          100: "#F4F5F5",
          200: "#EAEBEB",
          300: "#D7DADA",
          400: "#BFC3C4",
          500: "#AFB5B6",
          600: "#7A8385",
          700: "#555C5D",
          800: "#3D4243",
          900: "#242525",
        },
      },
    },
  },
  plugins: [],
};
