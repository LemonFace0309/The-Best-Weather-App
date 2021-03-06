import Footer from 'components/Footer';
import Header from 'components/Header';
import Weather, { DEFAULT_CITIES } from 'components/Weather';
import ContextProvider from 'context/Main';
import type { NextPage } from 'next';
import getCities from 'utils/getCities';

import { initializeApollo } from '../apollo/client';

const Home: NextPage = () => {
  return (
    <ContextProvider>
      <Header />
      <Weather />
      <Footer />
    </ContextProvider>
  );
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await getCities(DEFAULT_CITIES, apolloClient);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default Home;
