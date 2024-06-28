import { SearchByName,ToogleStatus} from "@/components/filters";
import { Suspense } from "react";
import { MdFilterList } from "react-icons/md";


export default function FilterCategorySection() {
    return (
        <section className="w-full flex flex-col gap-10 relative">
            <legend className="text-2xl flex gap-2 "><MdFilterList className="h-7 w-7 text-aorus"/>Filtrar </legend>

            <div className="flex items-center justify-between max-lg:flex-col gap-10 max-lg:gap-14  duration-300">
                <Suspense>
                    <SearchByName/>
                </Suspense>
                <Suspense> 
                    <ToogleStatus/>
                </Suspense>
            </div>

        </section>
  );
}