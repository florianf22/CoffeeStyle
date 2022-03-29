/*
  Warnings:

  - A unique constraint covering the columns `[dimensionsId]` on the table `Mug` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `details` to the `Mug` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimensionsId` to the `Mug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mug" ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "dimensionsId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dimensions" (
    "id" SERIAL NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Dimensions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mug_dimensionsId_key" ON "Mug"("dimensionsId");

-- AddForeignKey
ALTER TABLE "Mug" ADD CONSTRAINT "Mug_dimensionsId_fkey" FOREIGN KEY ("dimensionsId") REFERENCES "Dimensions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
