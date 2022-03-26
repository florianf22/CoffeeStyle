import type { NextPage } from 'next';
import SectionLabel from './section-label';

const Blogs: NextPage = () => {
  return (
    <section className="mt-24 text-center">
      <SectionLabel className="max-w-[30ch] uppercase">
        Behind the mugs, lifestyle stories
      </SectionLabel>
    </section>
  );
};

export default Blogs;
