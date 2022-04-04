import { Blog } from '@prisma/client';
import type { NextPage } from 'next';
import Image from 'next/image';
import { formatDate } from '../lib/formaters';
import Button from './button';

interface Props
  extends Blog,
    Omit<React.HTMLProps<HTMLDivElement>, 'id' | 'title'> {
  showButton: boolean;
}

const Blog: NextPage<Props> = ({
  title,
  highlight,
  imgUrl,
  createdAt,
  updateAt,
  id,
  showButton,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`mt-8 flex flex-col items-center text-center transition-transform ${className}`}
    >
      <div className={`relative w-[92.5vw] h-[30vh]`}>
        <Image
          src={imgUrl}
          alt="offer pic"
          layout="fill"
          className="object-cover bg-center"
        />
      </div>

      <h2 className="mt-4 text-xl">{title}</h2>

      <p className="mt-4 max-w-[40ch] text-gray-500">{highlight}</p>

      <div className="mt-4 text-gray-400">
        {formatDate(new Date(createdAt))}
      </div>

      {showButton && (
        <Button secondary className="mt-6">
          READ THE FULL STORY
        </Button>
      )}
    </div>
  );
};

export default Blog;
