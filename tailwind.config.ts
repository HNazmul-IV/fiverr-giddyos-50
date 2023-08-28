import flowbite_plugin from 'flowbite/plugin';
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: colors['sky'],
				'secondary-dark': '#555555'
			}
		}
	},

	plugins: [flowbite_plugin]
} satisfies Config;
