/*
  Warnings:

  - You are about to drop the column `author` on the `news` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."news" DROP COLUMN "author",
ADD COLUMN     "authorId" INTEGER;

-- CreateTable
CREATE TABLE "public"."authors" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "authorAvatar" TEXT,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."news" ADD CONSTRAINT "news_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
