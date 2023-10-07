import type { Theme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {}
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {}

  interface Palette {
    bgGradient: string;
    authModalBg: string;
  }

  interface PaletteOptions {
    bgGradient?: string;
    authModalBg?: string;
  }
}
