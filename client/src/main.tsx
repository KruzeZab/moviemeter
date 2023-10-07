import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import { CssBaseline } from '@mui/material';

import ToggleColorMode from './theme/ColorModeContext.tsx';
import GlobalStyle from './theme/GlobalStyle.tsx';
import ModalProvider from './context/ModalContext.tsx';
import AuthProvider from './context/AuthContext.tsx';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <ToggleColorMode>
      <CssBaseline />
      <GlobalStyle />
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </ToggleColorMode>
  </React.StrictMode>
);
