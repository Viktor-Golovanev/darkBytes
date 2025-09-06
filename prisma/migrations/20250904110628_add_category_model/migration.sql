/*
  Warnings:

  - You are about to drop the column `category` on the `authors` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `news` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstName,lastName]` on the table `authors` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."authors" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER;

-- AlterTable
ALTER TABLE "public"."news" DROP COLUMN "category",
ADD COLUMN     "categoryId" INTEGER;

-- CreateTable
CREATE TABLE "public"."categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "color" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "public"."categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "authors_firstName_lastName_key" ON "public"."authors"("firstName", "lastName");

-- CreateIndex
CREATE INDEX "news_authorId_idx" ON "public"."news"("authorId");

-- CreateIndex
CREATE INDEX "news_categoryId_idx" ON "public"."news"("categoryId");

-- AddForeignKey
ALTER TABLE "public"."news" ADD CONSTRAINT "news_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."authors" ADD CONSTRAINT "authors_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
