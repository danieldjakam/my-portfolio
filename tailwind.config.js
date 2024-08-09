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
				dark: '#2c7a7b',
				fonced: '#3A6BBA'
			},
		},
		},
	},
	plugins: [],
	darkMode: 'class', // Utiliser une classe pour le mode sombre
};
