import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alex-d-e-v.vercel.app',
  integrations: [react(), sitemap()]
});
