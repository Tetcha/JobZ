/*
  Warnings:

  - Added the required column `postId` to the `JobDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Require` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "JobDetail" DROP CONSTRAINT "JobDetail_id_fkey";

-- DropForeignKey
ALTER TABLE "Require" DROP CONSTRAINT "Require_id_fkey";

-- AlterTable
ALTER TABLE "JobDetail" ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Require" ADD COLUMN     "postId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "JobDetail" ADD CONSTRAINT "JobDetail_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Require" ADD CONSTRAINT "Require_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
