-- AlterTable
ALTER TABLE "public"."authors" ADD COLUMN     "bio" VARBIT(500),
ADD COLUMN     "birthDate" DATE;
