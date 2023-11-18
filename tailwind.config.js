import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				maru: ['"Zen Maru Gothic"', ...fontFamily.serif],
				sans: ['"Noto Sans TC"', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
