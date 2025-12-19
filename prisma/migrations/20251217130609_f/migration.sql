/*
  Warnings:

  - Added the required column `status` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdminStatus" AS ENUM ('PENDING', 'ACTIVE');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "status" "AdminStatus" NOT NULL;
