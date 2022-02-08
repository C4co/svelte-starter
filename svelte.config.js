import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			resolve: {
				alias: {
					'@/components': resolve('./src/components/index.ts'),
					'@/assets': resolve('./src/assets/index.ts'),
					'@/utils': resolve('./src/utils/index.ts'),
					'@/types': resolve('./src/utils/index.ts')
				}
			}
		}
	}
};

export default config;
