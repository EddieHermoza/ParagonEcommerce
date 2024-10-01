import { MdFilterList } from "react-icons/md";
import {SearchByName} from "@/components/filters";
import {ToogleOrder} from "@/components/filters";
import {ToogleCategory} from "@/components/filters";
import {PriceSelector} from "@/components/filters";
import { Suspense } from "react";

export default function FilterBrandPage() {
  return (
		<div className="w-full flex flex-col mb-10 border-b border-primary p-5 relative">
			<legend className="text-2xl flex gap-2 mb-10"><MdFilterList className="h-7 w-7 text-primary" /> Filtro Marca</legend>

			<div className="flex flex-col gap-10 max-lg:gap-14 duration-200 w-full relative">

          		<Suspense>
					<PriceSelector />
				</Suspense>

				<div className="grid gap-10 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-14  duration-200 place-content-center">
					<Suspense>
            			<SearchByName/>
					</Suspense>
					<Suspense>
						<ToogleCategory />
					</Suspense>
					<Suspense>
						<ToogleOrder />
					</Suspense>
				</div>

			</div>
		</div>
  );
}