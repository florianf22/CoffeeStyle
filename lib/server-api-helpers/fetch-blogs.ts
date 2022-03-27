import { Blog } from '@prisma/client';

type ReturnType = {
  data: Blog[];
  error: {
    message?: string;
  };
};

export const fetchBlogs = async (): Promise<ReturnType> => {
  const res = await fetch('http://localhost:3000/api/blogs');
  const json = await res.json();

  return json;
};
