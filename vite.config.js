import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
 
const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig({
	resolve: {
		alias: {
			$src: path.resolve('./src'),
		}
	},
	plugins: [sveltekit(), purgeCss()],
	define: {
    '__APP_VERSION__': JSON.stringify(pkg.version),
  }
});
