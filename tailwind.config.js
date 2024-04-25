/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        optima: ["Optima LT W02 Roman", "OptimaRoman", "sans-serif"],
        disket: ["Disket Mono", "serif"],
      },
      colors: {
        DarkBlue: "#05243A",
        BlueBackground: "#0b1828",
      },
      screens: {
        mobile: "220px",
      },
      fontWeight: {
        "custom-extrabold": "900",
      },
    },
  },
  plugins: [],
};
