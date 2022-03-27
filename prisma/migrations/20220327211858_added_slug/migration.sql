/*
  Warnings:

  - Added the required column `slug` to the `Mug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mug" ADD COLUMN     "slug" TEXT NOT NULL;
