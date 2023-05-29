/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Rating` table. All the data in the column will be lost.
  - Added the required column `avatar` to the `Rating` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- AlterTable
ALTER TABLE "Rating" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "avatar" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
