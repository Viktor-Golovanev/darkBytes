-- CreateTable
CREATE TABLE "public"."news" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "category" VARCHAR(50) NOT NULL,
    "content" TEXT NOT NULL,
    "author" VARCHAR(100),
    "published" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT NOT NULL,
    "crteated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "news_published_crteated_at_idx" ON "public"."news"("published", "crteated_at");
