/*
  Warnings:

  - Added the required column `location` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Workshop` table without a default value. This is not possible if the table is not empty.
  - Made the column `imgUrl` on table `Workshop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Workshop" ADD COLUMN     "location" TEXT NOT NULL,
ALTER COLUMN "imgUrl" SET NOT NULL;
