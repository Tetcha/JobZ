/*
  Warnings:

  - You are about to drop the column `duration` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `UserSubscription` table. All the data in the column will be lost.
  - Added the required column `name` to the `UserSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "duration",
DROP COLUMN "startDate";

-- AlterTable
ALTER TABLE "UserSubscription" DROP COLUMN "duration",
ADD COLUMN     "endDate" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "userRole" "Role" NOT NULL DEFAULT 'USER';
