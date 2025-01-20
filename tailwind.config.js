import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import forms from '@tailwindcss/forms';
import { join } from 'path';

/** @type {import('tailwindcss').Config} \*/
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}'),
		'./node_modules/layerchart/**/*.{svelte,js}' // <--- Add this
	],
	theme: {
		extend: {
			colors: {
				'surface-100': 'rgb(var(--theme-color-surface-100) / <alpha-value>)',
				'surface-200': 'rgb(var(--theme-color-surface-200) / <alpha-value>)',
				'surface-300': 'rgb(var(--theme-color-surface-300) / <alpha-value>)',
				'surface-content': 'rgb(var(--theme-color-surface-content) / <alpha-value>)',
			}
		}
	},
	plugins: [
		skeleton({
			themes: [themes.cerberus]
		}),
		forms
	]
};
