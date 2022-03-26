-- CreateTable
CREATE TABLE "Picture" (
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Picture_url_key" ON "Picture"("url");

-- AddForeignKey
ALTER TABLE "Mug" ADD CONSTRAINT "Mug_imgUrl_fkey" FOREIGN KEY ("imgUrl") REFERENCES "Picture"("url") ON DELETE RESTRICT ON UPDATE CASCADE;
