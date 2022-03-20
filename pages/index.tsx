import { Mug } from '@prisma/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import AboutOverview from '../components/about-overview.section';
import Header from '../components/header.section';
import Products from '../components/products.section';

interface Props {
  mugs: Mug[];
  error: string;
}

const Home: NextPage<Props> = ({ mugs, error }) => {
  return (
    <div>
      <Head>
        <title>CoffeeStyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <AboutOverview />
        {!error && <Products mugs={mugs} />}
        {error && <p>{error}</p>}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/mugs');
  const json = await res.json();

  return {
    props: {
      mugs: json.data,
      error: json?.error?.message ?? '',
    },
    revalidate: 20,
  };
};

export default Home;
