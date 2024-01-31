/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading1: "14rem",
      },
      lineHeight: {
        n: 0.8,
      },
      fontFamily: {
        Gro: "Grotesk",
      },
    },
  },
  plugins: [],
};
