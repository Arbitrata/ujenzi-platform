/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      "ujenzi-blue": "#3E92CC",
      "ujenzi-darkgray": "#202A44",
      "ujenzi-darkgrey": "#797979",
      "ujenzi-lightgrey": "#F7F2F7",
      "ujenzi-lightgreen": "#F3FFFF",
      "ujenzi-white": "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
