import { Blog } from '@prisma/client';

type ReturnType = {
  data: Blog;
  error: {
    message?: string;
  };
};

export const fetchBlogById = async (id: number): Promise<ReturnType> => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
  const json = await res.json();

  return json;
};
