import {
  defineConfig,
  presetTypography,
  presetUno,
  presetIcons,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  safelist: [
    'animate-order-0',
    'animate-order-1',
    'animate-order-2',
    'animate-order-3',
    'animate-order-4',
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|html)($|\?)/,
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
  ],

  transformers: [transformerDirectives()],
  shortcuts: [
    {
      'icon-search': 'i-ph-magnifying-glass',
      'icon-mac-cmd': 'i-fluent-key-command-24-regular',
      'icon-ctrl': 'i-fluent-control-button-24-regular',
      'icon-close': 'i-mdi-close',
      hoverable: 'transition-shadow @hover:bg-lighten',
      'if-disabled': 'disabled:bg-lighten disabled:text-gray',
      'core-btn':
        'transition-colors cursor-pointer rounded-lg px-2 py-1 decoration-none hoverable flex items-center justify-center if-disabled',
    },
    [
      /fe-border$|fe-border-(x|y|b|t|l|r)$/,
      ([, b]) => {
        const borderClass = b ? `border-${b}` : `border`;
        return `${borderClass} ${borderClass}-light-selection dark:${borderClass}-dark-selection`;
      },
    ],
    [
      /^(\w+)-(primary|secondary|accent|error|link|selection|background|foreground|success|warning|button)$/,
      ([, b, c]) => `${b}-light-${c} dark:${b}-dark-${c}`,
    ],
  ],
  rules: [
    [
      'bg-lighten',
      {
        '-moz-box-shadow': 'inset 0 0 100px 100px rgba(121, 126, 154, 0.2)',
        '-webkit-box-shadow': 'inset 0 0 100px 100px rgba(121, 126, 154, 0.2)',
        'box-shadow': 'inset 0 0 100px 100px rgba(121, 126, 154, 0.2)',
      },
    ],
    [
      'font-body-1',
      {
        'font-family': "'Open Sans Variable', sans-serif",
      },
    ],
    [
      'font-header',
      {
        'font-family': "'Fira Code Variable', monospace",
      },
    ],
    [
      /animate-order-(\d+)/,
      ([, n]) => ({
        '--animation-order': n,
      }),
    ],
  ],

  theme: {
    colors: {
      dark: {
        background: '#282a36',
        foreground: '#f8f8f2',
        button: '#000000',
        selection: '#44475a',
        accent: '#8be9fd',
        success: '#50fa7b',
        primary: '#ff79c6',
        warning: '#f1fa8c',
        secondary: '#bd93f9',
        error: '#ff5555',
        link: '#f1fa8c',
      },
      light: {
        background: '#FFFFFF',
        foreground: '#3D4752',
        button: '#FFFFFF',
        selection: '#E6E6E6',
        accent: '#70A4B9',
        success: '#05977D',
        primary: '#E05C84',
        warning: '#D67D00',
        secondary: '#640BE0',
        error: '#CB2735',
        link: '#AD6500',
      },
    },
  },
});
