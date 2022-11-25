/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      colors: {
        transparentGray: "rgba(181, 181, 181, 0.5)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
