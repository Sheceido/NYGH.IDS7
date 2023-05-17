import { defineConfig } from 'astro/config';
// import vercel from '@astrojs/vercel/serverless';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	// output: 'server',
	// adapter: vercel(),
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	site: `https://astro.build`,
});
