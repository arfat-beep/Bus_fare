/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./components//*.{js,ts,jsx,tsx}", "./pages//*.{js,ts,jsx,tsx}"],
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
};
