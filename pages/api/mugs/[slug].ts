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
    const slug = req.query.slug as string;

    const mug = await prisma.mug.findFirst({
      where: {
        slug,
      },
    });

    res.status(200).json({
      data: mug,
      error: null,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: {
        message: "We couldn't get mug info, please reload your page",
      },
      data: null,
    });
  }
}
