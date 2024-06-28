import { CategoriesTbl,FilterCategorySection } from "@/components/admin";

export default function Page() {
  return (
    <>
      <h1 className="text-5xl">Categorias</h1>
      <FilterCategorySection/>
      <CategoriesTbl/>
    </>
  );
}