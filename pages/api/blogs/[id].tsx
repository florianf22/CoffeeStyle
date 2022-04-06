import { Blog } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

type Data = {
  data: Blog[] | null;
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

    const blog = await prisma.blog.findFirst({
      where: {
        id: 3,
      },
    });

    res.status(200).json({
      data: blog,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: "We couldn't get blog info, please reload your page",
      },
      data: null,
    });
  }
}
