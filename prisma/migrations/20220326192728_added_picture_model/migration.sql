/*
  Warnings:

  - Added the required column `name` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Picture" ADD COLUMN     "name" TEXT NOT NULL;
