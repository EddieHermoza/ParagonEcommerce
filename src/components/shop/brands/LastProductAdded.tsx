import Link from "next/link"
import { titilium } from "@/app/config/font"
import { Button, Title } from "@/components/ui"
import { SlideShow } from "@/components/ui"
import { products } from "@/app/data/data"
export default function LastProductAdded() {
	return (
		<section className="relative flex-col w-full min-h-screen flex-center max-lg:pb-20">
			<Title title="ULTIMO AGREGADO" />

			<div className=" w-full max-w-[1500px] grid lg:grid-cols-2 max-lg:place-content-center relative p-5" >
				<SlideShow imgs={products[0].imgs} buttons={false} />

				<div className="relative flex flex-col justify-center py-3 text-xl gap-7">
					<span className={` ${titilium.className} text-primary text-lg md:text-2xl `}>Titulo del Producto</span>
					<p className="text-base sm:text-xl">Precio: $/100090</p>
					<p className={`${titilium.className}  text-base md:text-xl font-light text-muted-foreground line-clamp-3 md:line-clamp-5 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi reiciendis aperiam voluptatibus. Architecto autem dolore ut explicabo minus, maiores eaque officiis minima libero ad rem tempore voluptatibus magnam cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cum dignissimos, id quo vel hic quisquam explicabo natus reiciendis dolores.</p>

					<Button asChild  className="max-w-96 h-12 rounded-none">
						<Link href={"/"} className={`${titilium.className} text-xl`}>
							Ver más
						</Link>
					</Button>

				</div>
			</div>
		</section>
	)
}
