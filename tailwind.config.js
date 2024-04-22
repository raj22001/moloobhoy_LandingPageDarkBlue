/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        optima: ["Optima LT W02 Roman", "OptimaRoman", "sans-serif"],
      },
      colors: {
        DarkBlue: "#05243A",
      },
      screens: {
        mobile: "220px",
      },
    },
  },
  plugins: [],
};
