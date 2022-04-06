import { Blog } from '@prisma/client';
import { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '../lib/formaters';

interface Props {
  blog: Blog;
}

const BlogDetailed: NextPage<Props> = ({ blog }) => {
  return (
    <div className="py-24">
      <ul
        className="flex justify-center gap-4 text-primary text-[12px]
      font-bold tracking-[1px]"
      >
        <li className="opacity-70 border-b-2 border-primary border-opacity-70">
          <a>BLOG</a>
        </li>
        <li className="-mx-2 opacity-50">/</li>
        <li className="opacity-50">
          <a>LIFESTYLE</a>
        </li>
      </ul>

      <h1 className="mt-12 text-4xl font-light">{blog.title}</h1>
      <p className="mt-6 max-w-[40ch] text-gray-500 text-xl">
        {blog.highlight}
      </p>

      <div className={`relative w-full h-[30vh] mt-20`}>
        <Image
          src={blog.imgUrl}
          alt="offer pic"
          layout="fill"
          className="object-cover bg-center"
        />
      </div>

      <div className="mt-16 text-gray-400 text-left px-[5%]">
        <span
          className="
             relative after:w-[130%] after:absolute after:h-[1px] after:bg-gray-200
             after:top-1/2 after:left-full after:ml-4"
        >
          {formatDate(new Date(blog.createdAt))}
        </span>
      </div>
    </div>
  );
};

export default BlogDetailed;
