/*
  Warnings:

  - You are about to drop the column `workshopTime` on the `Workshop` table. All the data in the column will be lost.
  - Made the column `name` on table `Comments` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `workshopEndTime` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workshopStartTime` to the `Workshop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Workshop" DROP COLUMN "workshopTime",
ADD COLUMN     "workshopEndTime" TEXT NOT NULL,
ADD COLUMN     "workshopStartTime" TEXT NOT NULL;
