/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        maplestory: {
          light: "#f23428",
          DEFAULT: "#c1170c",
          dark: "#790e08",
        },
      },
      screens: {
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        },
        tallscreen: {
          raw: "(max-aspect-ratio: 13/20)",
        },
      },
      keyframes: {
        "open-menu": {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.2)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
