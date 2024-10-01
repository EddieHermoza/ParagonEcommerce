import { CustomBanner } from "@/components/ui";
import { LastProductAdded } from "@/components/shop";
import { ProductGrid } from "@/components/shop";
import { FilterBrandPage } from "@/components/shop";
import { Title } from "@/components/ui"
import FilterProductsContainer from "@/components/shop/products/filter-products-container";



export default function Page({ params }: { params: { slug: string } }) {
	return (
		<>
			<main>
				<CustomBanner banner={'/images/MSI.webp'} bannerMobile={'/images/MSI_mobile.webp'} />

				<LastProductAdded />

				<section className="relative flex flex-col items-center w-full sm:px-5">
					<Title title={params.slug} />
					<FilterProductsContainer>
						<ProductGrid/>
					</FilterProductsContainer>
				</section>
			</main>
		</>

	);
}
