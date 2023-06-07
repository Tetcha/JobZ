-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "view" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserSubscription" ADD COLUMN     "view" INTEGER NOT NULL DEFAULT 0;
