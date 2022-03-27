import { Mug } from '@prisma/client';

type ReturnType = {
  data: Mug;
  error: {
    message?: string;
  };
};

export const fetchMugBySlug = async (slug: string): Promise<ReturnType> => {
  const res = await fetch(`http://localhost:3000/api/mugs/${slug}`);
  const json = await res.json();

  return json;
};
