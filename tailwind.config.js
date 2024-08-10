/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
		colors: {
			primary: {
				light: '#4886E9',
				DEFAULT: '#4886E9',
				dark: '#6B9EF2',
				fonced: '#3A6BBA'
			},
			text: {
				light: "#4A4A4A",
				dark: "#BFBFBF"
			}
		},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
	darkMode: 'class', // Utiliser une classe pour le mode sombre
};
