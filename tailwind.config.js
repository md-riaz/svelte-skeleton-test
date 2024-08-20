
import { skeleton } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import { join } from 'path';

/** @type {import('tailwindcss').Config} \*/
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton-svelte'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {},
	},
	plugins: [
		skeleton({
			themes: [themes.cerberus, themes.rose]
		})
	]
}