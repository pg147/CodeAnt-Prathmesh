/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1570EF',
        light: '#FAFAFA',
        outline: '#E9EAEB',
        subHeading: "#6A6A6A"
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      boxShadow: {
        intense: '0px 0px 16px rgba(17,17,26,0.1)'
      }
    },
  },
  plugins: [],
}

