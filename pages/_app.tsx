import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    setIsServer(false);
  }, []);

  if (isServer) {
    return <></>;
  }
  return <Component {...pageProps} />;
};

export default MyApp;
