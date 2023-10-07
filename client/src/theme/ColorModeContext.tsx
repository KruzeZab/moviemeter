import { ThemeProvider, createTheme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import type { PaletteMode } from '@mui/material';

import { getDesignTokens } from '.';

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

interface IToggleColorMode {
  children: React.ReactNode;
}

const ToggleColorMode = ({ children }: IToggleColorMode) => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const memoTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={memoTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
