const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx", "./containers/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-primary": "#181818",
        "background-secondary": '#262626',
        "text": "#f7f7f7",
        "primary": "#46d8b7",
      },
    },
  },
  variants: {},
};
