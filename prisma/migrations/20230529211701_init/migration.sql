-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "name" TEXT NOT NULL,
    "otherJobs" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "hireJob" TEXT NOT NULL,
    "updateAt" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobDetail" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "applied" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "length" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "expired" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "JobDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Require" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Require_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobDetail" ADD CONSTRAINT "JobDetail_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Require" ADD CONSTRAINT "Require_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
