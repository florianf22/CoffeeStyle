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
  const [filteredMugs, setFilteredMugs] = React.useState<Mug[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  React.useEffect(() => {
    if (mugs.length > 0) {
      setFilteredMugs(mugs);
    }
  }, [mugs]);

  const handleCategoryChange = (category: string): void => {
    if (category === 'all') {
      setFilteredMugs(mugs);
    } else {
      setFilteredMugs(mugs.filter(mug => mug.category === selectedCategory));
    }
    setSelectedCategory(category);
  };

  return (
    <div>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper topSection="nav">
        <div className="pt-10 pb-10">
          <h1 className="text-3xl font-semibold">OUR PRODUCTS</h1>

          <h4 className="mt-8 text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
            tenetur!
          </h4>
        </div>

        <MugsCategoryList
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />

        <Slider
          RendererComponent={Blog}
          items={blogs}
          minHeight="min-h-[38rem]"
        />

        <Products mugs={filteredMugs} className="mt-24" biggerImgSize />
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
