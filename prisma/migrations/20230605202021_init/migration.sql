/*
  Warnings:

  - You are about to drop the column `subscriptionId` on the `UserSubscription` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserSubscription" DROP CONSTRAINT "UserSubscription_subscriptionId_fkey";

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "bookings" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "startDate" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userRole" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "duration" SET DEFAULT 0,
ALTER COLUMN "posts" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "UserSubscription" DROP COLUMN "subscriptionId",
ADD COLUMN     "bookings" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "posts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "price" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "startDate" INTEGER NOT NULL DEFAULT 0;
