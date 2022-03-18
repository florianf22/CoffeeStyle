import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header';
import Logo from '../components/logo';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CoffeeStyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
