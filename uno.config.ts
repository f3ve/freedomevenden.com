import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
  transformerDirectives,
} from 'unocss';

// const serif: any = { name: 'serif', provider: 'none' };
const sansSerif: any = { name: 'sans-serif', provider: 'none' };

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },

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
        'body-1': [{ name: 'Open' }, sansSerif],
        header: [{ name: 'Fira Code' }, sansSerif],
      },
    }),
  ],

  transformers: [transformerDirectives()],
  shortcuts: [
    {
      'icon-search': 'i-ph-magnifying-glass',
      'icon-mac-cmd': 'i-fluent-key-command-24-regular',
      'icon-ctrl': 'i-fluent-control-button-24-regular',
      'icon-close': 'i-mdi-close',
      'bg-base': 'bg-background',
      'text-base': 'text-foreground',
      hoverable: 'transition-shadow @hover:bg-lighten',
      'if-disabled': 'disabled:bg-lighten disabled:text-gray',
      'core-btn':
        'text-base transition-colors cursor-pointer rounded-lg px-2 py-1 decoration-none hoverable flex items-center justify-center if-disabled',
    },
    [
      /fe-border$|fe-border-(x|y|b|t|l|r)$/,
      ([, b]) => {
        const borderClass = b ? `border-${b}` : `border`;
        return `${borderClass} ${borderClass}-light-selection dark:${borderClass}-dark-selection`;
      },
    ],
    [
      /^(\w+)-(primary|secondary|accent|error|link|selection|background|foreground|success)$/,
      ([, b, c]) => `${b}-light-${c} dark:${b}-dark-${c}`,
    ],
  ],
  rules: [
    [
      'bg-lighten',
      {
        '-moz-box-shadow': 'inset 0 0 100px 100px rgba(68, 71, 90, 0.5)',
        '-webkit-box-shadow': 'inset 0 0 100px 100px rgba(68, 71, 90, 0.5)',
        boxShadow: 'inset 0 0 100px 100px rgba(68, 71, 90, 0.5)',
      },
    ],
  ],
  theme: {
    colors: {
      dark: {
        background: '#282a36',
        foreground: '#f8f8f2',
        selection: '#44475a',
        accent: '#8be9fd',
        success: '#50fa7b',
        primary: '#ff79c6',
        warning: '#ffb86c',
        secondary: '#bd93f9',
        error: '#ff5555',
        link: '#f1fa8c',
      },
      light: {
        background: '#ffffff',
        foreground: '#000000',
        selection: '#44475a',
        link: '#8be9fd',
        success: '#50fa7b',
        primary: '#ff79c6',
        warning: '#ffb86c',
        secondary: '#bd93f9',
        error: '#ff5555',
        accent: '#f1fa8c',
      },
    },
  },
});
