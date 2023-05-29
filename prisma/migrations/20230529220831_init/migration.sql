/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `JobDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "JobDetail_postId_key" ON "JobDetail"("postId");
