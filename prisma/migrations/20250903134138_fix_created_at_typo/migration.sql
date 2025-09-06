/*
  Warnings:

  - You are about to drop the column `crteated_at` on the `news` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."news_published_crteated_at_idx";

-- AlterTable
ALTER TABLE "public"."news" DROP COLUMN "crteated_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "news_published_created_at_idx" ON "public"."news"("published", "created_at");
