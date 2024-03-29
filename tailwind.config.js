module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        lg: "1120px",
      },
      fontSize: {
        h1: "4rem",
        h2: "2.75rem",
        h3: "2rem",
        h4: "1.375rem",
        body: "1rem",
        small: "0.75rem",
        th1: "2.75rem",
        sh1: "2.5rem",
        mh2: "1.875rem",
        mh3: "1.5rem",
        mh4: "1.125rem",
        tbody: "0.875rem",
        tsmall: "0.625rem",
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
        grey: "#7C869C",
        red: {
          lightest: "#ffd6d6",
        },
        green: {
          lightest: "#c7edc7",
          DEFAULT: "#008000",
        },
      },
      boxShadow: {
        custom: "4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      maxHeight: {
        blog: "26.25rem",
      },
      borderRadius: {
        "4xl": "30px",
      },
      zIndex: {
        60: 60,
      },
    },
    fontFamily: {
      body: ["Noto Sans"],
      header: ["Mulish"],
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
      stroke: ["hover"],
      borderWidth: ["last"],
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
