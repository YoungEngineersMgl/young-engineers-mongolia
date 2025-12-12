/*
  Warnings:

  - You are about to drop the column `images` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the `_BlogToContent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imgUrl` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blogId` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BlogToContent" DROP CONSTRAINT "_BlogToContent_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlogToContent" DROP CONSTRAINT "_BlogToContent_B_fkey";

-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "images",
ADD COLUMN     "adminId" TEXT,
ADD COLUMN     "imgUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "blogId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "adminId" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "adminId" TEXT;

-- AlterTable
ALTER TABLE "Workshop" ADD COLUMN     "adminId" TEXT;

-- DropTable
DROP TABLE "_BlogToContent";

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
