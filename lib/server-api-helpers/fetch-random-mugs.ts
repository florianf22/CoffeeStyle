import { Mug } from '@prisma/client';

type ReturnType = {
  data: Mug[];
  error: {
    message?: string;
  };
};

export const fetchRandomMugs = async (id: number): Promise<ReturnType> => {
  const res = await fetch(`http://localhost:3000/api/mugs/random-mugs/${id}`);
  const json = await res.json();

  return json;
};
