import * as React from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { fetchMugs } from '../../lib/server-api-helpers';
import { fetchMugBySlug } from '../../lib/server-api-helpers/fetch-mug-by-slug';
import { Mug } from '@prisma/client';
import Head from 'next/head';
import Footer from '../../components/footer.section';
import Product from '../../components/product';
import Nav from '../../components/nav';
import ShowIfNotError from '../../components/show-if-not-error';
import ProductDetailed from '../../components/ProductDetailed';

interface Props {
  mug: Mug;
  error: string;
}

const ProductPage: NextPage<Props> = ({ mug, error }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{mug.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <ShowIfNotError error={error}>
          <ProductDetailed mug={mug} />
        </ShowIfNotError>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const slug = context.params?.slug;

  if (!slug) {
    return {
      props: {
        mug: null,
      },
      revalidate: 20,
    };
  }

  const { data: mug, error } = await fetchMugBySlug(slug as string);

  return {
    props: {
      mug,
      error: error?.message ?? '',
    },
    revalidate: 20,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: mugs } = await fetchMugs();

  const paths = mugs.map(mug => ({
    params: { slug: mug.slug },
  }));

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export default ProductPage;
