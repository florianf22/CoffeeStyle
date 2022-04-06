import { NextPage } from 'next';
import Head from 'next/head';
import PageWrapper from '../../components/page-wrapper';

const someHtml = '<h1 class="heading">Hello Next.js</h1>';

const BlogPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper
        topSection="nav"
        dangerouslySetInnerHTML={{ __html: someHtml }}
      ></PageWrapper>
    </div>
  );
};
export default BlogPage;
