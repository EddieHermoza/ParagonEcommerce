import { FilterProductSection, InventoryTbl, ProductsTbl } from "@/components/admin";
import { SearchByName, ToogleBrand, ToogleCategory, ToogleStatus, ToogleStockStatus } from "@/components/filters";
import Link from "next/link";
import { Button } from "@/components/ui";
import { IoAddCircleOutline } from "react-icons/io5";
import { ToogleLimit } from "@/components/filters/toogle-limit";

export default function Page() {
	return (
		< >
			<section className="w-full flex items-start max-md:flex-col justify-between gap-3">
				<div className="space-y-4 max-sm:w-full">
					<SearchByName className="sm:w-96" />
					<ToogleLimit />
					<ToogleStatus />
				</div>
				<div className="space-y-4 w-full flex-col items-end flex">
					<ToogleBrand />
					<ToogleCategory />
					<ToogleStockStatus />
				</div>

			</section>
			<section>
				<InventoryTbl />
			</section>
		</>
	);
}