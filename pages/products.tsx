import { Blog as BlogType, Mug } from '@prisma/client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Blog from '../components/blog';
import Cart from '../components/cart';
import Footer from '../components/footer.section';
import Header from '../components/header.section';
import MugsCategoryList from '../components/mugs-category-list';
import Nav from '../components/nav';
import PageWrapper from '../components/page-wrapper';
import Products from '../components/products.section';
import Slider from '../components/slider';
import { fetchBlogs, fetchMugs } from '../lib/server-api-helpers';

interface Props {
  mugs: Mug[];
  errorMugs: string;
  blogs: BlogType[];
  errorBlogs: string;
}

const ProductsPage: NextPage<Props> = ({
  mugs,
  blogs,
  errorMugs,
  errorBlogs,
}) => {
  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper topSection="nav">
        <div className="text-center">
          <h1>OUR PRODUCTS</h1>

          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            tenetur!
          </h4>
        </div>

        <MugsCategoryList />

        <Slider
          RendererComponent={Blog}
          items={blogs}
          minHeight="min-h-[36rem]"
        />

        <Products mugs={mugs} className="mt-24" biggerImgSize />
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

export default ProductsPage;
