-- CreateTable
CREATE TABLE "public"."quotes" (
    "id" SERIAL NOT NULL,
    "quote" VARCHAR(255) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "quotes_quote_key" ON "public"."quotes"("quote");
