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
      'bg-base': 'bg-white dark:bg-dark',
    },
    [
      /fe-border$|fe-border-(x|y|b|t|l|r)$/,
      ([a, b]) => {
        const borderClass = b ? `border-${b}` : `border`;
        return `${borderClass} ${borderClass}-dark-300 dark:${borderClass}-black`;
      },
    ],
    [
      /^(\w+)-primary$/,
      ([a, b]) => `${b}-primary-dark dark:${b}-primary-default`,
    ],
  ],
  theme: {
    colors: {
      primary: {
        default: '#02FFD7',
        dark: '#00C5A0',
      },
    },
  },
});
