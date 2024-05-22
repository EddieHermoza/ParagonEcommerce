"use client"
import Link from "next/link";
import { categories } from "@/app/data/data";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui"
import {CustomImage} from "@/components/ui";



  export default function CategoriesCarousel() {
 
    return (
      <div className="w-full h-auto relative flex items-center justify-center py-10">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full"
        >
          <CarouselContent className="h-[360px]">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="pl-1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Link href={`/categories/${category.slug}`} className="h-full w-full bg-black flex justify-center flex-col items-center group hover:scale-[1.15] duration-300">
                  <CustomImage height={260} width={260} alt={category.name} src={category.img} className="h-[260px] w-[260px] hover:saturate-[3] duration-300" />
                  <span className="text-2xl group-hover:text-aorus duration-300">{category.name}</span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="border-none h-full left-0 max-sm:w-[20%] sm:w-[12%] bg-black/70  duration-300 rounded-none hover:bg-black z-30 group" 
            iconClassName="text-white group-hover:text-aorus w-12 h-12 group-hover:scale-125  duration-300" />
          <CarouselNext 
            className="border-none h-full right-0 max-sm:w-[20%] sm:w-[12%] bg-black/70  duration-300 rounded-none hover:bg-black z-30 group" 
            iconClassName="text-white group-hover:text-aorus w-12 h-12 group-hover:scale-125  duration-300" />
        </Carousel>
      </div>
    );
  }