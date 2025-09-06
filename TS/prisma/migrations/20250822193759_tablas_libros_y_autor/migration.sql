-- CreateTable
CREATE TABLE "public"."Libro" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "nomYapAutor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Autor" (
    "nomYap" TEXT NOT NULL,
    "nacimiento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_id_key" ON "public"."Libro"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Autor_nomYap_key" ON "public"."Autor"("nomYap");

-- AddForeignKey
ALTER TABLE "public"."Libro" ADD CONSTRAINT "Libro_nomYapAutor_fkey" FOREIGN KEY ("nomYapAutor") REFERENCES "public"."Autor"("nomYap") ON DELETE RESTRICT ON UPDATE CASCADE;
