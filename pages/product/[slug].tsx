import * as React from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { fetchMugs } from '../../lib/server-api-helpers';
import { fetchMugBySlug } from '../../lib/server-api-helpers/fetch-mug-by-slug';
import { Mug } from '@prisma/client';
import Head from 'next/head';
import Footer from '../../components/footer.section';
import Nav from '../../components/nav';
import ShowIfNotError from '../../components/show-if-not-error';
import ProductDetailed from '../../components/ProductDetailed';
import Input from '../../components/input';
import Button from '../../components/button';

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

      <main className="text-center px-[5vw]">
        <ShowIfNotError error={error}>
          <ProductDetailed mug={mug} />
        </ShowIfNotError>

        <div>
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            QUANTITY
          </h3>
          <Input type="number" className="border-black w-[100%] text-black" />
          <Button secondary className="mt-3 w-[100%] text-base">
            ADD TO CART
          </Button>
        </div>

        <div className="mt-10">
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            DETAILS
          </h3>

          <h4 className="text-gray-500 leading-7">{mug.details}</h4>
        </div>

        <div className="mt-10">
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            DIMENSIONS
          </h3>

          <div></div>
        </div>
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
