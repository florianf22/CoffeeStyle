-- AlterTable
ALTER TABLE "Mug" ADD COLUMN     "oldPrice" INTEGER,
ADD COLUMN     "onSale" BOOLEAN,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0;
