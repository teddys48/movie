const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        main: "#FDB0C0",
        main_dark: "#7D0541",
        soft_dark: "#212B2A",
      },
      textColor: {
        main: "#FDB0C0",
        main_dark: "#7D0541",
      },
      colors: {
        main: "#FDB0C0",
      },
      borderColor: {
        main: "#FDB0C0",
      },
    },
  },
  plugins: [flowbite.content()],
};
