import { Mug } from '@prisma/client';

type ReturnType = {
  data: Mug[];
  error: {
    message?: string;
  };
};

export const fetchMugs = async (): Promise<ReturnType> => {
  const res = await fetch('http://localhost:3000/api/mugs');
  const json = await res.json();

  return json;
};
