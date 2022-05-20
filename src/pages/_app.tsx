import { MantineProvider } from '@mantine/core';
import GlobalStyles from '@styles/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </MantineProvider>
  );
}

export default MyApp;
