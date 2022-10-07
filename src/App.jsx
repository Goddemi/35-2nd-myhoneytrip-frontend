import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';

const App = () => {
  return (
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
