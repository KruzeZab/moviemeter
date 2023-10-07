import { GlobalStyles, Theme } from '@mui/material';

const styles = (theme: Theme) => ({
  body: {
    background: theme.palette.bgGradient,
  },
});

const GlobalStyle = () => <GlobalStyles styles={styles} />;

export default GlobalStyle;
