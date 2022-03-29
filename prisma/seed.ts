import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
const prisma = new PrismaClient();
import { mugs } from '../data/mugs';
import { blogs } from '../data/blogs';
import { dimensions } from '../data/dimensions';

async function main() {
  await prisma.dimensions.createMany({
    data: dimensions,
  });

  await prisma.mug.createMany({
    data: mugs.map(mug => ({
      ...mug,
      slug: slugify(mug.name, { lower: true, replacement: '-' }),
    })),
  });

  await prisma.blog.createMany({
    data: blogs,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
