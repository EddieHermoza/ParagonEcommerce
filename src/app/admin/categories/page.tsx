import { CategoriesTbl,FilterCategorySection } from "@/components/admin";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="flex justify-between max-md:flex-col gap-5">
        <h1 className="text-5xl">Categorias</h1>
        <Link href={"/admin/categories/create"} className="btn-primary flex-center px-5  py-2 text-xl rounded-sm">Ingresar Nueva Categoria</Link>
      </section>
      <FilterCategorySection/>
      <CategoriesTbl/>
    </>
  );
}