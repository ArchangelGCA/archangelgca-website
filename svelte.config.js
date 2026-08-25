import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		output: {
			bundleStrategy: 'single'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: {
				brotli: true,
				gzip: true
			},
			strict: true
		}),
		prerender: {
			origin: 'https://archangelgca.eu'
		}
	}
};

export default config;
