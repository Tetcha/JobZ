/*
  Warnings:

  - The `applied` column on the `JobDetail` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "JobDetail" ALTER COLUMN "quantity" SET DEFAULT 0,
DROP COLUMN "applied",
ADD COLUMN     "applied" INTEGER NOT NULL DEFAULT 0;
