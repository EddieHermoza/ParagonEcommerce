import { CustomersTbl, FilterProductSection, ProductsTbl } from "@/components/admin";
import { SearchByName, ToogleStatus } from "@/components/filters";
import Link from "next/link";
import { Button } from "@/components/ui";
import { IoAddCircleOutline } from "react-icons/io5";
import { ToogleLimit } from "@/components/filters/toogle-limit";

export default function Page() {
	return (
		< >
			<section className="w-full flex items-end justify-between max-sm:flex-col-reverse gap-3">
				<div className="space-y-4 max-sm:w-full">
					<SearchByName className="sm:w-96 " />
					<ToogleLimit />
					<ToogleStatus />
				</div>
			</section>
			<section>
				<CustomersTbl />
			</section>
		</>
	);
}