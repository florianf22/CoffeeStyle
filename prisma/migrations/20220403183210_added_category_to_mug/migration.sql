/*
  Warnings:

  - Added the required column `category` to the `Mug` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Mug" ADD COLUMN     "category" TEXT NOT NULL;
