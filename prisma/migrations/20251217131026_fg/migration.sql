-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "inviteExpiresAt" TIMESTAMP(3),
ADD COLUMN     "inviteToken" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
