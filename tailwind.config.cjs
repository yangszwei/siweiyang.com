const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,css,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Noto Sans TC"', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
