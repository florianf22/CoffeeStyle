import { Mug } from '@prisma/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import AboutOverview from '../components/about-overview.section';
import Blogs from '../components/blogs.section';
import Header from '../components/header.section';
import Parallax from '../components/parallax';
import PremiumOffer from '../components/premium-offer.section';
import Products from '../components/products.section';
import ShowIfNotError from '../components/show-if-not-error';
import TwoMugOffer from '../components/two-mug-offer.section';
import { MugsContext } from '../context/mugs';

interface Props {
  mugs: Mug[];
  error: string;
}

const Home: NextPage<Props> = ({ mugs, error }) => {
  const { dispatch } = React.useContext(MugsContext);

  React.useEffect(() => {
    dispatch({ type: 'ADD_MUGS', payload: mugs });
  }, [dispatch, mugs]);

  return (
    <div>
      <Head>
        <title>CoffeeStyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <AboutOverview />

        <ShowIfNotError error={error}>
          <Products mugs={mugs} />
        </ShowIfNotError>

        <Products type="more" />

        <TwoMugOffer />

        <PremiumOffer />

        <Parallax />

        <Blogs />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/mugs/featured-mugs');
  const json = await res.json();

  return {
    props: {
      mugs: json.data,
      error: json?.error?.message ?? '',
    },
    revalidate: 20,
  };
};

export default React.memo(Home);
