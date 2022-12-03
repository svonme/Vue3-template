/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        eci: {
          black: "#333"
        }
      },
      maxWidth: {
        "80": "20rem"
      },
      spacing: {
        "80": "20rem"
      }
    },
  },
  plugins: [

  ],
}
