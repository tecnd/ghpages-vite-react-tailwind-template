/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        vite: "0 0 2em #646cffaa",
        react: "0 0 2em #61dafbaa",
      },
      animation: {
        "react-spin": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
