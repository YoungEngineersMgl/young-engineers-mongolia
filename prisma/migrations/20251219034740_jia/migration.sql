/*
  Warnings:

  - A unique constraint covering the columns `[blogId]` on the table `Content` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Content_blogId_key" ON "Content"("blogId");
