import { PrismaClient } from '@prisma/client';
import { mugs } from '../data/mugs';
const prisma = new PrismaClient();

async function main() {
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
