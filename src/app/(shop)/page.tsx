
import { HeroCarousel } from "@/components/shop"
import { CategoriesCarousel } from "@/components/shop";
import { ExploreGrid } from "@/components/shop";
import { ContactForm } from "@/components/shop";
import { MembresyBanner } from "@/components/shop";
import { Title } from "@/components/ui";


export default function Home() {
	return (
		<>
			<main>
				<section className="w-full relative">
					<HeroCarousel />
				</section>

				<section className="relative w-full mx-auto">
					<Title
						title="DESCUBRE MÁS"
						sub="AORUS es una empresa líder en tarjetas madre, tarjetas gráficas, laptops, hardware de juegos y sistemas de alto rendimiento. ¡Nos apasiona unirnos a los jugadores para desafiar los límites sin miedo y luchar mientras nos elevamos a la gloria máxima!"
					/>

					<CategoriesCarousel />
				</section>

				<section  className="relative w-full flex-center flex-col gap-10 pb-10">
					<Title
						title="EXPLORA"
						sub="Nuestra excelencia como tienda se refleja en lo que le ofrecemos a los clientes."
					/>
					<ExploreGrid />
				</section>

				<section className="w-full relative pt-10">
					<MembresyBanner />
				</section>

				<section className="flex justify-center w-full py-[60px]">
					<ContactForm />
				</section>

			</main>
		</>

	);
}
