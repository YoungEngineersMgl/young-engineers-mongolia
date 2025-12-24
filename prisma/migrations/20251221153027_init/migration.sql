/*
  Warnings:

  - You are about to drop the column `eventDate` on the `Workshop` table. All the data in the column will be lost.
  - You are about to drop the column `eventTime` on the `Workshop` table. All the data in the column will be lost.
  - Added the required column `workshopDate` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workshopTime` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "eventDate",
DROP COLUMN "eventTime",
ADD COLUMN     "workshopDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "workshopTime" TEXT NOT NULL;
