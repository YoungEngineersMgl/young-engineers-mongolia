/*
  Warnings:

  - Made the column `imgUrl` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "imgUrl" SET NOT NULL;
