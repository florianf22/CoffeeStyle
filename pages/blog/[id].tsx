import { Blog } from '@prisma/client';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import BlogDetailed from '../../components/blog-detailed';
import PageWrapper from '../../components/page-wrapper';
import { fetchBlogById } from '../../lib/server-api-helpers';

interface Props {
  blog: Blog;
}

const BlogDetailsPage: NextPage<Props> = ({ blog }) => {
  return (
    <div>
      <Head>
        <title>Blog Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper topSection="nav" className="p-0" padding={false}>
        <BlogDetailed blog={blog} />

        {/* TODO: style via css */}
        {blog.html && (
          <div dangerouslySetInnerHTML={{ __html: blog.html }}></div>
        )}
      </PageWrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.id;

  if (!id) {
    return {
      props: {
        mug: null,
      },
      revalidate: 20,
    };
  }

  const { data: blog, error } = await fetchBlogById(+id);

  return {
    props: {
      blog,
      error: error?.message ?? '',
    },
    revalidate: 20,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: '1' },
      },
    ],
    fallback: true, // false or 'blocking'
  };
};

export default BlogDetailsPage;
