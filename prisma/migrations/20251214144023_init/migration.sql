-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'ENGINEERING';

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_marketingId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_marketingId_fkey";

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_marketingId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "engineeringId" TEXT,
ALTER COLUMN "marketingId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "engineeringId" TEXT,
ALTER COLUMN "marketingId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Workshop" ADD COLUMN     "engineeringId" TEXT,
ALTER COLUMN "marketingId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_marketingId_fkey" FOREIGN KEY ("marketingId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_engineeringId_fkey" FOREIGN KEY ("engineeringId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_engineeringId_fkey" FOREIGN KEY ("engineeringId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_marketingId_fkey" FOREIGN KEY ("marketingId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_engineeringId_fkey" FOREIGN KEY ("engineeringId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_marketingId_fkey" FOREIGN KEY ("marketingId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
