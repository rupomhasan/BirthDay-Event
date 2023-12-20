/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Pacifico: ["Pacifico", "cursive"],
      Rubik: ["Rubik", "sans-serif"],
    },
    colors: {
      "cyan-blue": "#abb8c3",
      "btn-bg": "#ff5f6a",
      "pale-pink": "#f78da7",
      "vivid-red": "#cf2e2e",
      "vivide-orange": "#ff6900",
      "vivide-amber": "#fcb900",
      "vivide-cyan": "#7bdcb5",
      "gray-dark": "#273444",
      "yellow-dark": "#ddb837",
      "gray-light": "#d3dce6",
      white: "#fff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#00d084",
      yellow: "#ffd909",
      gray: "#f5f5f5",
      balck: "#000000",
      gray200: "#eeeeee",
      gray400: "#BDBDBD",
      gray500: "#9e9e9e",
      gray600: "#757575",
      gray700: "#616161",
    },
    /*     screens: {
      sm: "640px",
      sm_up: "694px",
      md: "764px",
      md_up: "810px",
      lg: "1024",
      xl: "1280",
      "2xl": "1536",
    }, */
  },
  plugins: [require("daisyui")],
};
