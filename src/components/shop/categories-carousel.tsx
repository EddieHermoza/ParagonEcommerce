"use client"
import Link from "next/link";
import { categories } from "@/app/data/data";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui";
import { CustomImage } from "@/components/ui";

export default function CategoriesCarousel() {

	return (
		<div className="relative flex items-center justify-center w-full h-auto py-10 ">
			<Carousel
				opts={{ loop: true, align:"start"}} 
				plugins={[Autoplay({ delay: 5000})]}
				className="w-full"
			>
				<CarouselContent className="h-96">
					{categories.map((category, index) => (
						<CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 ">
							<Link href={`/categories/${category.slug}`} className="h-full w-full bg-black flex justify-center flex-col items-center group hover:scale-[1.15] duration-200">
								<CustomImage height={260} width={260} alt={category.name} src={"/images/Laptop.webp"} className="h-[260px] w-[260px] hover:saturate-[3] duration-200" />
								<span className="text-2xl duration-200 group-hover:text-primary">{category.name}</span>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious 
					className="h-full border-none hover:bg-muted/30 rounded-none bg-transparent w-20 left-0 hover:text-primary duration-200"
						iconClassName="h-8 w-8"
				/>
				<CarouselNext 
					className="h-full border-none hover:bg-muted/30 rounded-none bg-transparent w-20 right-0 hover:text-primary duration-200"
					iconClassName="h-8 w-8"
				/>
			</Carousel>
		</div>
	);
}