-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "time" INTEGER NOT NULL,
    "linkMeeting" TEXT NOT NULL,
    "appliedId" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Booking_appliedId_key" ON "Booking"("appliedId");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_appliedId_fkey" FOREIGN KEY ("appliedId") REFERENCES "Applied"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
