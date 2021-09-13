module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: "#faf7f2",
        blue: {
          lightest: "#dbe7ff",
          light: "#9ec0ff",
          DEFAULT: "#578aef",
          dark: "#436dc0",
        },
        black: "#020e0d",
      },
      fontFamily: {
        body: ["Noto Sans"],
        header: ["Mulish"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
