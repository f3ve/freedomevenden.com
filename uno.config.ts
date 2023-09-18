import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Quicksand',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],

  transformers: [transformerDirectives()],

  shortcuts: {
    'list-item-clickable':
      'border rounded-lg pa-4 transition-colors @hover:bg-gray @hover:bg-op-7',
    'bg-base': 'bg-white dark:bg-black',
  },
  theme: {
    colors: {
      dark: {
        primary: '#BA5624',
      },
    },
  },
});
