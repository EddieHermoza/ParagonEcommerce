import { SearchByName,ToogleBrand,ToogleCategory,ToogleStatus} from "@/components/filters";
import { Suspense } from "react";
import { MdFilterList } from "react-icons/md";



export default function FilterCustomerSection() {
    return (
        <section className="w-full flex flex-col gap-10 relative">
            <legend className="text-2xl flex gap-2 "><MdFilterList className="h-7 w-7 text-aorus"/>Filtrar </legend>

            <div className="flex flex-col gap-14 duration-300">

                <div className="flex items-center justify-between max-lg:flex-col gap-10 max-lg:gap-14  duration-300">
                    <SearchByName/>
                </div>

                <div className="flex items-center justify-between max-lg:flex-col gap-10 max-lg:gap-14  duration-300">
                    <Suspense> 
                        <ToogleBrand/> 
                    </Suspense>
                    <Suspense>
                        <ToogleCategory/>
                    </Suspense>
                    <Suspense>
                        <ToogleStatus/>
                    </Suspense>

                </div>

            </div>
        </section>
  );
}