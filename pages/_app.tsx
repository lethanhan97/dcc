import '../src/shared/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import Header from '../src/shared/components/Header';
import AppWrapper from '../src/shared/components/AppWrapper/AppWrapper';
import store from '../src/redux/store';
import SidebarContainer from '../src/shared/components/SidebarContainer';
import ContextWrapper from '../src/shared/components/ContextWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ContextWrapper>
        <div>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <AppWrapper>
            <Header />
            <Component {...pageProps} />
            <SidebarContainer />
          </AppWrapper>
        </div>
      </ContextWrapper>
    </Provider>
  );
}

export default MyApp;
