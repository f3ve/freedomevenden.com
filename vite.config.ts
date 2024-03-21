// Learn more about Vite: https://vitejs.dev/
import { defineConfig, splitVendorChunkPlugin } from 'vite';

import fs from 'fs-extra';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

// Vue
import vue from '@vitejs/plugin-vue';

// QOL
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';

// CSS Plugins
import UnoCSS from 'unocss/vite';
import Unfonts from 'unplugin-fonts/vite';

// Markdown
import md from 'unplugin-vue-markdown/vite';
import anchor from 'markdown-it-anchor';
import linkAttrs from 'markdown-it-link-attributes';
import toc from 'markdown-it-table-of-contents';
import matter from 'gray-matter';
import markdownItHighlights from 'markdown-it-highlightjs';

// SSG
import 'vite-ssg';
import generateSitemap from 'vite-ssg-sitemap';

export default defineConfig({
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
    entries: ['./src/**/*.vue'],
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  // vite-ssg https://github.com/antfu/vite-ssg
  ssgOptions: {
    formatting: 'minify',
    script: 'async',
    crittersOptions: {
      preload: false,
    },
    format: 'cjs',
    onFinished() {
      generateSitemap({
        readable: true,
        hostname: 'https://freedomevenden.com',
      });
    },
  },

  plugins: [
    // @vitejs/plugin-vue: https://github.com/vitejs/vite-plugin-vue
    vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        propsDestructure: true,
      },
    }),

    // unplugin-vue-markdown: https://github.com/unplugin/unplugin-vue-markdown
    md({
      headEnabled: true,
      wrapperComponent: 'CoreMdWrapper',
      markdownItOptions: {
        linkify: true,
        breaks: true,
      },
      markdownItSetup(md) {
        md.use(anchor, {
          permalink: anchor.permalink.headerLink(),
        });
        md.use(toc, { includeLevel: [1, 2, 3, 4] });
        md.use(markdownItHighlights, {
          auto: true,
          code: true,
          register: null,
          inline: true,
          ignoreIllegals: true,
        });
        md.use(linkAttrs, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),

    // unplugin-auto-import: https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],
        },
      ],
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),

    // unplugin-fonts: https://github.com/cssninjaStudio/unplugin-fonts
    Unfonts({
      fontsource: {
        families: ['Open Sans Variable', 'Fira Code Variable'],
      },
    }),

    // uno-css: https://github.com/unocss/unocss
    UnoCSS({
      configFile: './uno.config.ts',
    }),

    // unplugin-vue-components: https://github.com/unplugin/unplugin-vue-components
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));

        if (path?.endsWith('.md')) {
          // Adding Markdown file frontmatter to the meta info of the route.
          const markdown = fs.readFileSync(path, 'utf-8');
          const { data } = matter(markdown);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }

        return route;
      },
    }),

    splitVendorChunkPlugin(),
  ],
});
