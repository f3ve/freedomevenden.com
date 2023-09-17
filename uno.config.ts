import {
  defineConfig,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetIcons,
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
});
