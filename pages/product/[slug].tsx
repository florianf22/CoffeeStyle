import * as React from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { fetchMugs, fetchRandomMugs } from '../../lib/server-api-helpers';
import { fetchMugBySlug } from '../../lib/server-api-helpers/fetch-mug-by-slug';
import { Dimensions, Mug } from '@prisma/client';
import Head from 'next/head';
import Footer from '../../components/footer.section';
import Nav from '../../components/nav';
import ShowIfNotError from '../../components/show-if-not-error';
import ProductDetailed from '../../components/ProductDetailed';
import Input from '../../components/input';
import Button from '../../components/button';
import { fetchDimensionsById } from '../../lib/server-api-helpers/fetch-dimensions-by-id';
import Banner from '../../components/banner.secion';
import Products from '../../components/products.section';
import { CartContext } from '../../context/cart';
import Cart from '../../components/cart';
import PageWrapper from '../../components/page-wrapper';

interface Props {
  mug: Mug;
  dimensions: Dimensions;
  mugs: Mug[];
  error: string;
}

const ProductPage: NextPage<Props> = ({ mug, dimensions, error, mugs }) => {
  const [quantity, setQuantity] = React.useState(1);
  const {
    actions: { addItemToCart: addItemToCartAction },
    dispatch,
  } = React.useContext(CartContext);

  const addItemToCart = () => {
    addItemToCartAction(mug, quantity);
    dispatch({ type: 'TOGGLE_VISIBILITY' });
  };

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const renderDimensions = () => {
    return (
      <>
        {Object.keys(dimensions).map(key => {
          if (key === 'id') return null;

          return (
            <div key={key} className="flex justify-center gap-3">
              <h4 className="text-gray-500 leading-7">
                {`${key} (${key === 'weight' ? 'oz' : 'in'})`}:
              </h4>
              <h4 className="text-black leading-7">
                {dimensions[key as keyof Dimensions].toFixed(1)}
              </h4>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <Head>
        <title>{mug.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper topSection="nav" className="text-center">
        <ShowIfNotError error={error}>
          <ProductDetailed mug={mug} />
        </ShowIfNotError>

        <div className="px-[5vw]">
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            QUANTITY
          </h3>
          <Input
            type="number"
            className="border-black w-[100%] text-black"
            value={quantity}
            onChange={onChangeQuantity}
          />
          <Button
            secondary
            className="mt-3 w-[100%] text-base"
            onClick={addItemToCart}
          >
            ADD TO CART
          </Button>
        </div>

        <div className="mt-10 px-[5vw]">
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            DETAILS
          </h3>

          <h4 className="text-gray-500 leading-7">{mug.details}</h4>
        </div>

        <div className="mt-10 mb-24 px-[5vw]">
          <h3
            className="mt-2 mb-[0.8rem] text-gray-500 text-sm
            tracking-[1.2px]"
          >
            DIMENSIONS
          </h3>

          <div>{renderDimensions()}</div>
        </div>

        <Banner />

        <Products mugs={mugs} title="YOU MIGHT ALSO LIKE THIS" />
      </PageWrapper>
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

  const [{ data: dimensions }, { data: mugs }] = await Promise.all([
    fetchDimensionsById(mug.dimensionsId),
    fetchRandomMugs(mug.id),
  ]);

  return {
    props: {
      mug,
      dimensions,
      mugs,
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
