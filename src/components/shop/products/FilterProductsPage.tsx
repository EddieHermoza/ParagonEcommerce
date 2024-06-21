import { MdFilterList } from "react-icons/md";
import {SearchByName} from "@/components/filters"
import {ToogleOrder} from "@/components/filters"
import {PriceSelector} from "@/components/filters"
import {ToogleCategory} from "@/components/filters"
import {ToogleBrand} from "@/components/filters"
import { Suspense } from "react";

export default function FilterProductsPage() {
  return (
    <div className="w-full flex flex-col mb-10 border-b border-aorus p-5">
      <legend className="text-2xl flex gap-2 mb-10"><MdFilterList className="h-7 w-7 text-aorus"/> Filtro Productos</legend>

      <div className="flex flex-col gap-10 max-lg:gap-14 transform duration-300">

        <div className="flex items-center justify-between max-lg:flex-col gap-10 max-lg:gap-14  duration-300">
          <Suspense>
            <SearchByName/>
          </Suspense>
          <Suspense>
            <PriceSelector/>
          </Suspense>
        </div>

        <div className="grid gap-10 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-14  duration-300">
          <Suspense> 
            <ToogleBrand/> 
          </Suspense>
          <Suspense>
            <ToogleCategory/>
          </Suspense>
          <Suspense> 
            <ToogleOrder/>
          </Suspense>

        </div>

      </div>
    </div>
  );
}