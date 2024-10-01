import { Title } from "@/components/ui";
import { Rating } from "@/components/ui";
import { titilium } from "@/app/config/font";
import { SlideShow } from "@/components/ui";
import Link from "next/link";
import { ReviewCarousel } from "@/components/shop";
import { AddProduct } from "@/components/shop";
import { QuantitySelector } from "@/components/shop";
import { products } from "@/app/data/data";
import { ProductsCarousel } from "@/components/shop/product/products-carousel";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui"



export default function Page({ params }: { params: { slug: string } }) {

	const product = products.find(product => product.slug === params.slug)



	return (
		<>
			<main className="px-5 max-sm:px-0">
				<section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col items-center">
					<Title title={product?.name} />
					<div className="relative grid w-full grid-cols-1 lg:grid-cols-2 lg:divide-x">

						<div className="relative flex-col w-full h-auto gap-10 px-5 flex-center">

							<div className="w-full h-full">

								<div className="flex justify-center">
									<Rating rating={product?.rating} />
								</div>

								<SlideShow imgs={product?.imgs} buttons />

							</div>

							<Accordion type="single" collapsible defaultValue="item-1" className="w-full">
								<AccordionItem value="item-1" className="mb-3">
									<AccordionTrigger className="w-full flex justify-between " >

										<span className="text-xl text-left">Especificaciones Técnicas</span>

									</AccordionTrigger>
									<AccordionContent className={` ${titilium.className} w-full space-y-8 relative py-3 text-muted-foreground text-lg`}>
										{product?.especs.map((especificacion, index) => (
											<li key={index}>{especificacion}</li>
										))}

									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>

						<div className="w-full h-full">
							<div className="lg:sticky top-[60px] text-xl space-y-7 px-5 py-3 ">
								<p className="text-2xl">Marca: <Link href={`/brands/${product?.brand}`} className="duration-200 hover:text-primary">{product?.brand} </Link></p>
								<p >En stock: {product?.stock}</p>
								<h3>Precio: $/ {product?.price}</h3>
								<p
									className={`${titilium.className} text-muted-foreground max-sm:text-base font-thin relative pb-5`}
								>
									{product?.description}
								</p>
								<Link href="https://www.aorus.com/es-pe" target="_blank" className="underline duration-200 hover:text-primary underline-offset-4 hover:underline-offset-8 ">Más Información</Link>
								<p>Cantidad Seleccionada:</p>
								<QuantitySelector />
								{product && (
									<AddProduct text="Añadir al" className="flex-center w-80 h-12 text-lg gap-2" product={product} iconSize={24}/>
								)}
							</div>

						</div>
					</div>
				</section>

				<section className="w-full relative flex flex-col items-center py-20">
					<Title title="TESTIMONIOS" />
					<ReviewCarousel />
				</section>

				<section className="relative flex flex-col items-center gap-10 py-20 w-full max-w-full mx-auto px-8 max-sm:px-0">
					<Title title="OTROS PRODUCTOS" sub={`Te presentamos una selección de artículos que son similares en características al ${product?.name}`} />
					<ProductsCarousel/>
				</section>
			</main>

		</>
	);
}
