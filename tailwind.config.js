/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#243cff",
      },
      spacing: {
        42: "170px",
      },
    },
  },
  plugins: [],
};
