-- AlterTable
ALTER TABLE "public"."Libro" ADD CONSTRAINT "Libro_pkey" PRIMARY KEY ("id");

-- DropIndex
DROP INDEX "public"."Libro_id_key";
