import { defineConfig } from 'astro/config';

export default defineConfig({
	compressHTML: false,
	build: {
		assets: 'assets',
		format: 'file',
	},
	vite: {
		define: {
			'process.env': process.env,
		},
		build: {
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					entryFileNames: 'assets/main.js',
					assetFileNames: 'assets/main[extname]',
				},
			},
		},
	},

	output: 'static',
});
