import { ProvidersTbl } from "@/components/admin";
import { SearchByName, ToogleStatus } from "@/components/filters";
import Link from "next/link";
import { Button } from "@/components/ui";
import { IoAddCircleOutline } from "react-icons/io5";
import { ToogleLimit } from "@/components/filters/toogle-limit";

export default function Page() {
	return (
		<>
			<section className="w-full flex items-end justify-between max-sm:flex-col-reverse gap-3">
				<div className="space-y-4 max-sm:w-full">
					<SearchByName className="sm:w-96 " />
					<ToogleLimit />
					<ToogleStatus />
				</div>

				<Button asChild>
					<Link href={"/admin/providers/create"} className="max-sm:w-full flex gap-2 ">
						<IoAddCircleOutline size={22} /> Agregar Proveedor
					</Link>
				</Button>

			</section>
			
			<section>
				<ProvidersTbl />
			</section>
		</>
	);
}