import { Glitch } from "@/components/ui";
export default function Loading() {
	return (
		<>
			<section className="h-full w-full flex-center flex-col gap-5">
				<div className="loader"></div>

				<Glitch tittle="Cargando" height={60} width={260} fontSize={18} />
			</section>
		</>
	);
}