import { BrandsTbl,FilterBrandSection } from "@/components/admin";

export default function Page() {
  return (
    <>
      <h1 className="text-5xl">Marcas</h1>
      <FilterBrandSection/>
      <BrandsTbl/>
    </>
  );
}