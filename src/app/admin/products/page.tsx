import {FilterProductSection, ProductsTbl} from "@/components/admin";
import Link from "next/link";

export default function Page() {
  return (
    < >
    <section className="flex justify-between">
      <h1 className="text-5xl">Productos</h1>
      <Link href={"/admin/products/create"} className="btn-primary flex-center px-5 text-xl rounded-sm">Ingresar Nuevo Producto</Link>
    </section>

      <FilterProductSection/>

      <ProductsTbl/>
    </>
  );
}