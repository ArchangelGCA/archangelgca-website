import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
	// Vite 8 + Bun 1.4 – no Node-specific polyfills needed for static output
});
