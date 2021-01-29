/* eslint-disable react/jsx-props-no-spreading */
import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Nivolet = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default Nivolet;
