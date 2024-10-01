
import { ProductGrid } from "@/components/shop";
import { Button, Pagination } from "@/components/ui";
import { FilterProductsPage } from "@/components/shop";
import { Suspense } from "react";
import Image from "next/image";
import { Footer } from "@/components/shop";
import { Checkbox } from "@/components/ui/checkbox";
import { brands, categories } from "@/app/data/data";
import { MdFilterList } from "react-icons/md";
import { PriceSelector, SearchByName } from "@/components/filters";
import FilterProductsContainer from "@/components/shop/products/filter-products-container";
import { sleep } from "@/lib/utils";
export default async function Page() {
	await sleep(3000)
	return (
		<>
			<main>
				<section className="relative w-full max-sm:h-[500px] h-[714px] overflow-hidden flex items-center mb-16">
					<Image src={"/images/Ofertas.webp"} alt="" width={2000} height={714} className="parallax-animation bg-secondary absolute inset-0 filter saturate-150 w-full h-full  object-cover object-center" />

					<h2 className="z-30 relative flex items-start flex-col justify-center text-6xl sm:text-8xl transform duration-300 ml-[10vw]">
						<span className=" animate-fade-right animate-duration-[1000ms] text-shadow-lg shadow-white/40">Todos   </span>
						<span className="animate-fade-right animate-duration-[2000ms] text-shadow-lg shadow-white/40">Los      </span>
						<span className="animate-fade-right animate-duration-[3000ms] text-shadow-lg shadow-white/40">Productos</span>
					</h2>

					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent "></div>
					<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-transparent "></div>
				</section>

				<section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col h-full sm:px-5 py-10">
					<FilterProductsContainer>
						<ProductGrid/>
					</FilterProductsContainer>
				</section>
			</main>
		</>
	);
}