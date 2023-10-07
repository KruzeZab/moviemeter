import { createTheme, type PaletteMode } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    bgGradient: '#fff',
    authModalBg: 'rgba(255, 255, 255, 0.8)',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    bgGradient: 'radial-gradient(circle, #333333, #000000)',
    authModalBg: 'rgba(0, 0, 0, 0.8)',
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    ...(mode === 'light' ? lightTheme.palette : darkTheme.palette),
    mode,
  },
});
