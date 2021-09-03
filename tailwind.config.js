module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: "#fef9f2",
      blue: {
        lightest: "#dbe7ff",
        light: "#aec7f9",
        DEFAULT: "#578aef",
        dark: "#3664c0",
      },
      black: "#020e0d",
    },
    fontFamily: {
      noto: ['"Noto Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
