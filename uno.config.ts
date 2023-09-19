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
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Quicksand',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],

  transformers: [transformerDirectives()],

  shortcuts: [
    {
      'list-item-clickable':
        'border rounded-lg pa-4 transition-colors @hover:bg-gray @hover:bg-op-7',
      'bg-base': 'bg-white dark:bg-black',
    },
    [
      /^(bg|text)-(primary|secondary)$/,
      ([, t, c]) => `${t}-light-${c} dark:${t}-dark-${c}`,
    ],
  ],
  theme: {
    colors: {
      dark: {
        primary: '#e0692d',
      },
      light: {
        primary: '#BA5624',
      },
    },
  },
});
