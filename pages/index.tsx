import * as React from 'react';
import { Blog, Mug } from '@prisma/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import AboutOverview from '../components/about-overview.section';
import Blogs from '../components/blogs.section';
import PageWrapper from '../components/page-wrapper';
import Parallax from '../components/parallax';
import PremiumOffer from '../components/premium-offer.section';
import Products from '../components/products.section';
import ShowIfNotError from '../components/show-if-not-error';
import TwoMugOffer from '../components/two-mug-offer.section';
import { fetchBlogs, fetchMugs } from '../lib/server-api-helpers';

interface Props {
  mugs: Mug[];
  errorMugs: string;
  blogs: Blog[];
  errorBlogs: string;
}

const HomePage: NextPage<Props> = ({ mugs, blogs, errorMugs, errorBlogs }) => {
  const featuredMugs = mugs.filter(mug => mug.featured);
  const notFeaturedMugs = mugs.filter(mug => !mug.featured);

  return (
    <div>
      <Head>
        <title>CoffeeStyle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper>
        <AboutOverview />

        <ShowIfNotError error={errorMugs}>
          <Products mugs={featuredMugs} title="FEATURED PRODUCTS" />
        </ShowIfNotError>

        <ShowIfNotError error={errorMugs}>
          <Products mugs={notFeaturedMugs} title="MORE PRODUCTS" />
        </ShowIfNotError>

        <TwoMugOffer />

        <PremiumOffer />

        <Parallax />

        <ShowIfNotError error={errorBlogs}>
          <Blogs blogs={blogs} />
        </ShowIfNotError>
      </PageWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [jsonMugs, jsonBlogs] = await Promise.all([fetchMugs(), fetchBlogs()]);

  return {
    props: {
      mugs: jsonMugs.data,
      errorMugs: jsonMugs.error?.message ?? '',
      blogs: jsonBlogs.data,
      errorBlogs: jsonBlogs.error?.message ?? '',
    },
    revalidate: 20,
  };
};

export default HomePage;
