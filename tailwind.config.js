module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        h1: "4rem",
        h2: "2.75rem",
        h3: "2rem",
        h4: "1.375rem",
        body: "1rem",
        small: "0.75rem",
      },
      colors: {
        white: "#faf7f2",
        blue: {
          lightest: "#d1e1ff",
          light: "#9ec0ff",
          DEFAULT: "#4c87fe",
          dark: "#3a5ea6",
        },
        black: "#020e0d",
      },
      boxShadow: {
        custom: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      width: {
        "3/10": "30%",
      },
    },
    fontFamily: {
      body: ["Noto Sans TC"],
      header: ["Mulish"],
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
