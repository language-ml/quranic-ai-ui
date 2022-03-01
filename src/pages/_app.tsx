import { useEffect } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import theme from 'src/configs/theme/theme';
import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import Head from 'next/head';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'src/assets/styles/globals.css';
import { store } from 'src/app/store';

export const APP_VERSION = '0.1.21';

const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter(),
    { t } = useTranslation();

  const direction = locale === 'fa' ? 'rtl' : 'ltr';

  const persistor = persistStore(store);

  useEffect(() => {
    const doc_body = document.body;
    if (direction === 'rtl') {
      doc_body.className = 'fa-font-family';
    } else {
      doc_body.className = '';
    }
    doc_body.dir = direction;
  }, [direction]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <meta name="description" content={t('quranicAI')} />
          <title>{t('quranicAI')}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={createEmotionCache(direction)}>
          <ThemeProvider
            theme={{
              ...theme,
              direction,
            }}
          >
            <CssBaseline />
            <ToastContainer limit={3} rtl={direction === 'rtl'} />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default appWithTranslation(App);
