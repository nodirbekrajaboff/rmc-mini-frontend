/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        dark: "#0B0E17",
        gray: "#ABAEB7",
        primary: "#FFC978",
      },
      backgroundImage: {
        body: "url('/images/background.png')",
      },
    },
  },
  plugins: [],
};
