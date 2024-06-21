import { MdFilterList } from "react-icons/md";
import {SearchByName} from "@/components/filters";
import {ToogleOrder} from "@/components/filters";
import {ToogleCategory} from "@/components/filters";
import {PriceSelector} from "@/components/filters";
import { Suspense } from "react";

export default function FilterBrandPage() {
  return (
    <div className="w-full flex flex-col mb-10 border-b border-aorus p-5">
      <legend className="text-2xl flex gap-2 mb-10"><MdFilterList className="h-7 w-7 text-aorus"/> Filtro Marcas</legend>

      <div className=" py-5 grid grid-cols-2 place-items-start gap-7 max-lg:grid-cols-1 max-lg:gap-14 ">
        <Suspense><SearchByName/></Suspense>
        <PriceSelector/>
        <ToogleCategory/>
        <ToogleOrder/>
      </div>
    </div>
  );
}