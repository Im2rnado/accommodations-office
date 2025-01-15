/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        "blue-solid": "0px 4px 0px #003fa3",
      },
    },
  },
  plugins: [],
}

