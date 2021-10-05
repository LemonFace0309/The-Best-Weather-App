import 'styles/index.scss';

import { ApolloProvider } from '@apollo/client';
import Layout from 'components/Layout';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { useApollo } from '../apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
export default MyApp;
