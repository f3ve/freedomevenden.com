import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss';

const serif: any = { name: 'serif', provider: 'none' };
const sansSerif: any = { name: 'sans-serif', provider: 'none' };

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
      provider: 'bunny',
      fonts: {
        'body-1': [{ name: 'Open Sans' }, sansSerif],
        header: [{ name: 'Georgia' }, serif],
      },
    }),
  ],

  transformers: [transformerDirectives()],

  shortcuts: [
    {
      'list-item-clickable':
        'border rounded-lg pa-4 transition-colors @hover:bg-gray @hover:bg-op-7',
      'bg-base': 'bg-light-100 dark:bg-dark-900',
      'text-base-color': 'text-dark-200 dark:text-light-100',
    },
    [
      /fe-border$|fe-border-(x|y|b|t|l|r)$/,
      ([a, b]) => {
        const borderClass = b ? `border-${b}` : `border`;
        return `${borderClass} ${borderClass}-gray-300 dark:${borderClass}-dark`;
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
        dark: '#008E6D',
      },
    },
  },
});
