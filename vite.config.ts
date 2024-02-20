// Learn more about Vite: https://vitejs.dev/
import { defineConfig } from 'vite';

import fs from 'fs-extra';
import { fileURLToPath, URL } from 'node:url';

// Vue
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';
import {
  getPascalCaseRouteName,
  VueRouterAutoImports,
} from 'unplugin-vue-router';

// QOL
import AutoImport from 'unplugin-auto-import/vite';

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
import 'vite-ssg'; // https://github.com/antfu/vite-ssg
import generateSitemap from 'vite-ssg-sitemap';

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
      // Folder(s) to scan for vue components and generate routes. Can be a string, or
      // an object, or an array of those. Each option allows to override global options.
      // like exclude, extensions, etc.
      routesFolder: 'src/pages',

      // allowed extensions for components to be considered as pages
      // can also be a suffix: e.g. `.page.vue` will match `home.page.vue`
      // but remove it from the route path
      extensions: ['.vue', '.md'],

      // list of glob files to exclude from the routes generation
      // e.g. ['**/__*'] will exclude all files and folders starting with `__`
      // e.g. ['**/__*/**/*'] will exclude all files within folders starting with `__`
      // e.g. ['**/*.component.vue'] will exclude components ending with `.component.vue`
      exclude: ['**/components/*'],

      // Path for the generated types. Defaults to `./typed-router.d.ts` if typescript
      // is installed. Can be disabled by passing `false`.
      // dts: './typed-router.d.ts',

      // Override the name generation of routes. unplugin-vue-router exports two versions:
      // `getFileBasedRouteName()` (the default) and `getPascalCaseRouteName()`. Import any
      // of them within your `vite.config.ts` file.
      // getRouteName: (routeNode) => myOwnGenerateRouteName(routeNode),

      // Customizes the default language for `<route>` blocks
      // json5 is just a more permissive version of json
      routeBlockLang: 'yaml',

      // Change the import mode of page components. Can be 'async', 'sync', or a function with the following signature:
      // (filepath: string) => 'async' | 'sync'
      importMode: 'async',

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

    // @vitejs/plugin-vue: https://github.com/posva/unplugin-vue-router
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
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
          auto: true, // default true
          code: true, //default true
          register: null, // default null
          inline: true, // default false
          ignoreIllegals: true, // default true
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

    Unfonts({
      fontsource: {
        families: ['Open Sans Variable', 'Fira Code Variable'],
      },
    }),

    UnoCSS({
      configFile: './uno.config.ts',
    }),

    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
});
