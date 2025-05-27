/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nibol: {
          orange: '#FA4A0C', // hover
          light: '#FECBA1',  // bottone base
          dark: '#2C2C2C',
        },
      },
    },
  },
  plugins: [],
};
