/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4fd1c5',
          DEFAULT: '#38b2ac',
          dark: '#2c7a7b',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Utiliser une classe pour le mode sombre
};
