import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import md from 'unplugin-vue-markdown/vite';

import 'vite-ssg';

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
    script: 'async',
    formatting: 'prettify',
    format: 'cjs',
    crittersOptions: {
      pruneSource: true,
    },
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({
      headEnabled: true,
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

    Components({
      dirs: ['src/core/components', 'src/pages/**/components/**'],
    }),

    Pages({
      exclude: ['**/components/**'],
      extensions: ['vue', 'md'],
    }),
  ],
});
