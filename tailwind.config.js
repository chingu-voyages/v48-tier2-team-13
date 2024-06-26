/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#EEFFF5",
        100: "#D7FFE9",
        200: "#B2FFD4",
        300: "#76FFB4",
        400: "#33F58C",
        500: "#09DE6B",
        600: "#00AB4F",
        700: "#02b555",
        800: "#049146",
        900: "#0A5D33",
        950: "#00341A",
      },
      secondary: {
        50: "#FCFEE8",
        100: "#F9FFC2",
        200: "#F7FF99",
        300: "#F8FF45",
        400: "#faef07",
        500: "#ECE206",
        600: "#CCB302",
        700: "#A28106",
        800: "#86650D",
        900: "#725211",
        950: "#432C05",
      },
      neutral: {
        50: "#F7F7F7",
        100: "#E7E7E7",
        200: "#D1D1D1",
        300: "#B0B0B0",
        400: "#888888",
        500: "#6D6D6D",
        600: "#5D5D5D",
        700: "#4F4F4F",
        800: "#454545",
        950: "#141414",
      },
      bg: {
        primary: "#121212",
        secondary: "#272727",
      },
      text: {
        dark: "#212427",
        light: "#ffffff",
      },
      transparent: "transparent",
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"],
      secondary: ["OpenSans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
