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
    const blogs = await prisma.blog.findMany();

    res.status(200).json({
      data: blogs,
      error: null,
    });
  } catch (err) {
    res.status(500).json({
      error: {
        message: "We couldn't get blogs info, please reload your page",
      },
      data: null,
    });
  }
}
