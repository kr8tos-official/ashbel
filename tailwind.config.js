/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bg_color: "#212121",
      text_color: "#FFFFFF",
      black_text: "rgb(0, 0, 0);",
    },
    animation: {
      extrapolateWidth_default: "extrapolate_width",
      extrapolateHeight_default: "extrapolate_height 3s ease ",
    },

    keyframes: {
      extrapolateWidth: {
        "0%": {
          width: "0px",
        },
        "100%": {
          width: "100%",
        },
      },

      extrapolateHeight: {
        "0%": {
          height: "0px",
        },
        "100%": {
          height: "100%",
        },
      },
    },
  },
  plugins: [],
};
