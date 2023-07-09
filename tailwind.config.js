/**
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ["Fredericka the Great", "cursive"],
        schoolbell: ["Schoolbell", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "off-white": "#f5ece9",
        "dark-red": "#b42222",
        "dark-blue": "#143b66",
        "desert-gold": "#e8a13a",
        "park-green": "#62b273",
        charcoal: "#292929",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
