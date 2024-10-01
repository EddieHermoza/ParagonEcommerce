import { MdFilterList } from "react-icons/md";
import { SearchByName } from "@/components/filters"
import { ToogleOrder } from "@/components/filters"
import { PriceSelector } from "@/components/filters"
import { ToogleCategory } from "@/components/filters"
import { ToogleBrand } from "@/components/filters"
import { Suspense } from "react";

export default function FilterProductsPage() {
	return (
		<div className="w-full flex flex-col mb-10 border-b border-primary p-5 relative">
			<legend className="text-2xl flex gap-2 mb-10"><MdFilterList className="h-7 w-7 text-primary" /> Filtro Productos</legend>

			<div className="flex flex-col gap-10 max-lg:gap-14 duration-200 w-full relative">

				<div className="flex lg:items-center justify-between max-lg:flex-col gap-10 max-lg:gap-14  duration-200 w-full relative">

					<SearchByName className="lg:w-96"/>

					<Suspense>
						<PriceSelector />
					</Suspense>
				</div>

				<div className="grid gap-10 grid-cols-3 max-lg:grid-cols-1 max-lg:gap-14  duration-200">
					<Suspense>
						<ToogleBrand />
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