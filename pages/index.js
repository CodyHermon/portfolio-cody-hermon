import Head from 'next/head';
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Cody Hermon Portfolio</title>
        <meta name='description' content={`Cody Hermon's Portfolio`} />
      </Head>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
