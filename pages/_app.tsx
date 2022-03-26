import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MugsProvider } from '../context/mugs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MugsProvider>
      <Component {...pageProps} />
    </MugsProvider>
  );
}

export default MyApp;
