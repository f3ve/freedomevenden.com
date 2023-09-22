import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import md from 'unplugin-vue-markdown/vite';
import matter from 'gray-matter';
import fs from 'fs-extra';
import UnoCSS from 'unocss/vite';
import markdownItHighlights from 'markdown-it-highlightjs';
import generateSitemap from 'vite-ssg-sitemap';

import 'vite-ssg';
import { resolve } from 'node:path';

export default defineConfig({
  optimizeDeps: {
    entries: ['./src/**/*.vue'],
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  ssgOptions: {
    formatting: 'prettify',
    format: 'cjs',
    crittersOptions: {
      pruneSource: true,
    },
    onFinished() {
      generateSitemap({
        readable: true,
        hostname: 'https://freedomevenden.com',
      });
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({
      headEnabled: true,
      wrapperComponent: 'CoreMdWrapper',
      markdownItSetup(md) {
        md.use(markdownItHighlights, {
          auto: true, // default true
          code: true, //default true
          register: null, // default null
          inline: true, // default false
          ignoreIllegals: true, // default true
        });
      },
    }),
    AutoImport({
      imports: [
        'vue',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],
        },
      ],
      dirs: ['src/core/composables', 'src/store'],
      vueTemplate: true,
      dts: './src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),

    UnoCSS({
      configFile: './uno.config.ts',
    }),

    Components({
      dirs: ['src/core/components', 'src/pages/**/components/**'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Pages({
      exclude: ['**/components/**'],
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));

        if (path.endsWith('.md')) {
          const markdown = fs.readFileSync(path, 'utf-8');
          const { data } = matter(markdown);

          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        return route;
      },
    }),
  ],
});
