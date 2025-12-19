/*
  Warnings:

  - You are about to drop the column `imgUrl` on the `Content` table. All the data in the column will be lost.
  - Added the required column `contentimgUrl` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_researchId_fkey";

-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "researchId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Content" DROP COLUMN "imgUrl",
ADD COLUMN     "contentimgUrl" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
