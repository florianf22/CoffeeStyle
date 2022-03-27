import type { Blog as BlogType } from '@prisma/client';
import type { NextPage } from 'next';
import Blog from './blog';
import SectionLabel from './section-label';

interface Props {
  blogs: BlogType[];
}

const Blogs: NextPage<Props> = ({ blogs }) => {
  return (
    <section className="mt-24 text-center">
      <SectionLabel className="max-w-[30ch] uppercase">
        Behind the mugs, lifestyle stories
      </SectionLabel>

      <div className="mt-16">
        {blogs.map(blog => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
