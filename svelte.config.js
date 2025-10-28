import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
            precompress: true,
        }),
		prerender: {
			origin: 'https://archangelgca.eu',
		}
	}
};

export default config;
