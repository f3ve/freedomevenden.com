import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';
import f3veConfig from '@f3ve/eslint-config';
import unocss from '@unocss/eslint-config/flat';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const eslintrc = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...f3veConfig({
    prettier: true,
    vue: true,
    typescript: true,
    browser: true,
  }),
  ...eslintrc.extends('./.eslintrc-auto-import.json'),
  unocss,
  {
    rules: {
      'unocss/blocklist': 'warn',
    },
  },
];

// import globals from 'globals';
// import js from '@eslint/js';
// import ts from '@typescript-eslint/eslint-plugin';

// import tsParser from '@typescript-eslint/parser';
// import vueEslintParser from 'vue-eslint-parser';
// import eslintPrettierConfig from 'eslint-config-prettier';
// import prettier from 'eslint-plugin-prettier';
// import vuePlugin from 'eslint-plugin-vue';

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// const eslintrc = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const files = ['**/*.js', '**/*.ts', '**/*.vue'];
// const ignores = [
//   '**/node_modules',
//   '**/dist',
//   '**/package-lock.json',
//   '**/yarn.lock',
//   '**/pnpm-lock.yaml',

//   '**/output',
//   '**/coverage',
//   '**/temp',
//   '**/.vitepress/cache',
//   '**/.nuxt',
//   '**/.vercel',
//   '**/.changeset',
//   '**/.idea',
//   '**/.output',
//   '**/.vite-inspect',

//   '**/CHANGELOG*.md',
//   '**/*.min.*',
//   '**/LICENSE*',
//   '**/__snapshots__',
//   '**/auto-import?(s).d.ts',
//   '**/components.d.ts',
// ];

// export default [
//   {
//     files,
//     ignores,
//   },
//   {
//     languageOptions: {
//       name: 'f3ve:javascript',
//       ecmaVersion: 2021,
//       sourceType: 'module',
//       parser: vueEslintParser,
//       parserOptions: {
//         parser: tsParser,
//         extraFileExtensions: ['.vue'],
//       },
//       globals: {
//         ...globals.browser,
//       },
//     },
//   },
//

//   js.configs.recommended,
//   eslintPrettierConfig,

//   // TypeScript Config
//   {
//     plugins: {
//       '@typescript-eslint': ts,
//     },
//     rules: {
//       ...ts.configs['eslint-recommended'].overrides[0].rules,
//       ...ts.configs.recommended.rules,
//     },
//   },

//   // Vue config
//   {
//     plugins: {
//       vue: vuePlugin,
//     },
//     processor: vuePlugin.processors['.vue'],
//     rules: {
//       ...vuePlugin.configs['vue3-recommended'].rules,
//       'vue/valid-v-slot': ['error', { allowModifiers: true }],
//       'vue/multi-word-component-names': 'off',
//       'vue/no-v-text-v-html-on-component': 'warn',
//     },
//   },

//   // Prettier config
//   {
//     plugins: {
//       prettier,
//     },
//     rules: {
//       'prettier/prettier': 'error',
//     },
//   },

//   // Base config
//
//       'no-console': 'warn',
//       'no-debugger': 'warn',
//     },
//   },
// ];
