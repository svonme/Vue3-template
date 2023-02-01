/** @type {import('tailwindcss').Config} */

const { spacing, height, width, colors } = require("./tailwind/config.cjs");

module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors,
      spacing,
      height,
      minHeight: height,
      maxHeight: height,
      width,
      minWidth: width,
      maxWidth: width,
      lineHeight: {
        "12.5": "3.125rem",
      },
    },
  },
  plugins: [

  ],
}
