import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { copyFile, mkdir } from 'node:fs/promises';
import { portraitRegistry } from './src/content/portrait-registry';

export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  site: process.env.SITE_URL || 'https://veracto-showcase.example',
  integrations: [
    {
      name: 'approved-selected-portraits',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await mkdir(new URL('portraits/', dir), { recursive: true });
          for (const name of Object.values(portraitRegistry)) {
            for (const width of [320, 640, 960, 'full']) {
              const file = `${name}-${width}.webp`;
              await copyFile(
                new URL(
                  `./src/assets/portraits/processed/${file}`,
                  import.meta.url,
                ),
                new URL(`portraits/${file}`, dir),
              );
            }
          }
        },
      },
    },
    sitemap({
      filter: (page) => {
        const redirects = new Set([
          '/approach/',
          '/team/',
          '/contact/',
          '/evidence/',
          '/ru/approach/',
          '/ru/team/',
          '/ru/contact/',
          '/ru/evidence/',
          '/services/',
          '/small-business/',
          '/method/',
          '/work/',
          '/ru/services/',
          '/ru/small-business/',
          '/ru/method/',
          '/ru/work/',
        ]);
        return (
          !redirects.has(new URL(page).pathname) &&
          !new URL(page).pathname.includes('/visual-lab/')
        );
      },
    }),
  ],
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    define: {
      'import.meta.env.APPROVED_PORTRAITS': JSON.stringify(true),
    },
    build: {
      assetsInlineLimit: 0,
    },
  },
});
