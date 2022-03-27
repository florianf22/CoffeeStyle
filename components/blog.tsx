import { Blog } from '@prisma/client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '../lib/formaters';

interface Props {
  blog: Blog;
}

const Blog: NextPage<Props> = ({ blog }) => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className={`relative w-[92.5vw] h-[30vh]`}>
        <Image
          src={blog.imgUrl}
          alt="offer pic"
          layout="fill"
          className="object-cover bg-center"
        />
      </div>

      <h2 className="mt-4 text-xl">{blog.title}</h2>

      <p className="mt-4 max-w-[40ch] text-gray-500">{blog.highlight}</p>

      <div className="mt-4 text-gray-400">
        {formatDate(new Date(blog.createdAt))}
      </div>
    </div>
  );
};

export default Blog;
