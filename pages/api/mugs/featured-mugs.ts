import { Mug } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

type Data = {
  data: Mug[] | null;
  error: {
    message: string;
  } | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const mugs = await prisma.mug.findMany({
      where: { featured: true },
    });

    res.status(200).json({
      data: mugs,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: "We couldn't get mugs info, please reload your page",
      },
      data: null,
    });
  }
}
