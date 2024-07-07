import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https:/astroBlog.github.io/',
	base: 'https://a-juran.github.io/astroBlog.github.io/',
	integrations: [mdx(), sitemap()],
});
