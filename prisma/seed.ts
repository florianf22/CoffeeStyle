import { PrismaClient } from '@prisma/client';
import { mugs } from '../data/mugs';
import { pictures } from '../data/pictures';
const prisma = new PrismaClient();

async function main() {
  await prisma.picture.createMany({
    data: pictures,
  });

  await prisma.mug.createMany({
    data: mugs,
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
