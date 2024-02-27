// Learn more about Vite: https://vitejs.dev/
import { defineConfig, splitVendorChunkPlugin } from 'vite';

import fs from 'fs-extra';
import { fileURLToPath, URL } from 'node:url';

// Vue
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';

// QOL
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  getPascalCaseRouteName,
  VueRouterAutoImports,
} from 'unplugin-vue-router';

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
    format: 'cjs',
    onFinished() {
      generateSitemap({
        readable: true,
        hostname: 'https://freedomevenden.com',
      });
    },
  },

  plugins: [
    // unplugin-vue-router: https://github.com/posva/unplugin-vue-router
    VueRouter({
      routesFolder: 'src/pages',
      extensions: ['.vue', '.md'],
      exclude: ['**/components/*'],
      routeBlockLang: 'yaml',

      // Setting the base index file as 'sync' import. All other files are 'async'
      importMode: (filepath: string) =>
        filepath.endsWith('src/pages/index/index.md') ? 'sync' : 'async',

      getRouteName(node) {
        return getPascalCaseRouteName(node);
      },

      extendRoute(route) {
        // Grab the path to the routes component file.
        const path = route.components.get('default');

        if (path?.endsWith('.md')) {
          // Adding Markdown file frontmatter to the meta info of the route.
          const markdown = fs.readFileSync(path, 'utf-8');
          const { data } = matter(markdown);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }
      },
    }),

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
        VueRouterAutoImports,
        {
          'vue-router/auto': [
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

    splitVendorChunkPlugin(),
  ],
});
