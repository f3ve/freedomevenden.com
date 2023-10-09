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
      'bg-base': 'bg-light-100 dark:bg-dark-900',
      'text-base-color': 'text-dark-200 dark:text-light-100',
      hoverable: 'transition-shadow @hover:bg-lighten',
      'bg-surface': 'bg-light-100 dark: dark:bg-dark',
      'if-disabled': 'disabled:bg-lighten disabled:text-gray',
      'core-btn':
        'transition-colors cursor-pointer rounded-lg px-2 py-1 decoration-none hoverable flex items-center justify-center if-disabled',
    },
    [
      /fe-border$|fe-border-(x|y|b|t|l|r)$/,
      ([, b]) => {
        const borderClass = b ? `border-${b}` : `border`;
        return `${borderClass} ${borderClass}-gray-300 dark:${borderClass}-dark-300`;
      },
    ],
    [
      /^(\w+)-primary$/,
      ([, b]) =>
        `${b}-primary-dark dark:${b}-primary-default ${
          b !== 'text' ? 'text-light dark:text-dark' : ''
        }`,
    ],
  ],
  rules: [
    [
      'bg-lighten',
      {
        '-moz-box-shadow': 'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
        '-webkit-box-shadow': 'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
        boxShadow: 'inset 0 0 100px 100px rgba(151, 151, 151, 0.25)',
      },
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
