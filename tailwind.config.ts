import flowbite_plugin from 'flowbite/plugin';
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		screens: {
			...defaultTheme.screens,
			'3xl': '1800px',
			'4xl': '2000px',
			'5xl': '2250px'
		},
		extend: {
			colors: {
				primary: colors['sky'],
				'secondary-dark': '#555555'
			}
		}
	},

	plugins: [flowbite_plugin]
} satisfies Config;
