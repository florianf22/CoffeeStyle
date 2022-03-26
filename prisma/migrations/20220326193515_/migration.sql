/*
  Warnings:

  - You are about to drop the column `name` on the `Picture` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "name",
ADD COLUMN     "twoForMagazine" BOOLEAN DEFAULT false;
