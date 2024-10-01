import { ProductGrid } from "@/components/shop";
import { Title } from "@/components/ui";
import FilterProductsContainer from "@/components/shop/products/filter-products-container";

export default function Page({ params }: { params: { slug: string } }) {
	return (
		<>
			<main>
				<section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col items-center">
					<Title title={params.slug} />
					<FilterProductsContainer>
						<ProductGrid />
					</FilterProductsContainer>
				</section>
			</main>
		</>

	);
}
