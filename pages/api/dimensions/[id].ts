import { Dimensions, Mug } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

type Data = {
  data: Dimensions[] | null;
  error: {
    message: string;
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const id = +req.query.id;

    const dimensions = await prisma.dimensions.findFirst({
      where: {
        id,
      },
    });

  

    res.status(200).json({
      data: dimensions,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: "We couldn't get dimensions info, please reload your page",
      },
      data: null,
    });
  }
}
