/*
  Warnings:

  - You are about to drop the `Picture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_imgUrl_fkey";

-- DropForeignKey
ALTER TABLE "Mug" DROP CONSTRAINT "Mug_imgUrl_fkey";

-- DropTable
DROP TABLE "Picture";
