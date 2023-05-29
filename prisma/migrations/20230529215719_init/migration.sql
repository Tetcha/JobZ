/*
  Warnings:

  - Added the required column `details` to the `Require` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Require" ADD COLUMN     "details" TEXT NOT NULL;
