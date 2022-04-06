import { Dimensions, Mug } from '@prisma/client';

type ReturnType = {
  data: Dimensions;
  error: {
    message?: string;
  };
};

export const fetchDimensionsById = async (id: number): Promise<ReturnType> => {
  const res = await fetch(`http://localhost:3000/api/dimensions/${id}`);
  const json = await res.json();

  return json;
};
