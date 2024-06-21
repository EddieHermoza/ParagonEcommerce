import { InventoryTbl,FilterInventorySection } from "@/components/admin";
export default function Page() {
  return (
    <>
      <h1 className="text-5xl">Inventario</h1>
      <FilterInventorySection/>
      <InventoryTbl/>
    </>
  );
}