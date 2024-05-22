"use client"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui"

export default function HeroCarousel() {
  return (
    <>
        <Carousel
        opts={ {  loop:true } }
        plugins={ [ Autoplay ( { delay: 7000, } ) , ] } 
        className="w-full h-full relative">
            <CarouselContent className="relative ml-0 pl-0">
                <CarouselItem className="pl-0">
                    <div className="h-auto w-screen relative">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-70"></div>
                        <Image height={766} width={1920} src={"/images/AERO-14-Oled.webp"} className="parallax-animation md:block max-md:hidden w-full bg-neutral-950" alt="aea"></Image>
                        <Image height={640} width={900} src={"/images/AERO-14-Oled-mobile.webp"} className="parallax-animation md:hidden max-md:block h-full  bg-neutral-950" alt="aea"></Image>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-0">
                    <div className="h-full w-screen relative">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-70"></div>
                        <Image height={766} width={1920} src={"/images/aorus-17-15.webp"} className="parallax-animation md:block max-md:hidden w-full  bg-neutral-950" alt="aea"></Image>
                        <Image height={640} width={900} src={"/images/aorus-17-15-mobile.webp"} className="parallax-animation md:hidden max-md:block h-full  bg-neutral-950" alt="aea"></Image>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-0">
                    <div className="h-full w-screen relative">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-70"></div>
                        <Image height={766} width={1920} src={"/images/ASUSmonitor.webp"} className="parallax-animation md:block max-md:hidden w-full  bg-neutral-950" alt="aea"></Image>
                        <Image height={640} width={900} src={"/images/ASUSmonitor-mobile.webp"} className="parallax-animation md:hidden max-md:block h-full  bg-neutral-950" alt="aea"></Image>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-0">
                    <div className="h-full w-screen relative">
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent opacity-70"></div>
                        <Image height={766} width={1920} src={"/images/HEROS-3.webp"} className="parallax-animation md:block max-md:hidden w-full  bg-neutral-950" alt="aea"></Image>
                        <Image height={640} width={900} src={"/images/HEROS-3-mobile.webp"} className="parallax-animation md:hidden max-md:block h-full b bg-neutral-950" alt="aea"></Image>
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious 
                className="absolute left-0 h-full rounded-none max-sm:w-[20%] sm:w-[12%] border-none hover:bg-gray-300/30"
                iconClassName="h-12 w-12 bg-black/50 hover:bg-black/70 hover:text-aorus transform duration-300 p-2 rounded-full  hover:scale-110" 
            />
            <CarouselNext 
                className="absolute right-0 h-full rounded-none max-sm:w-[20%] sm:w-[12%] border-none hover:bg-gray-300/30"
                iconClassName="h-12 w-12 bg-black/50 hover:bg-black/70 hover:text-aorus transform duration-300 p-2 rounded-full hover:scale-110"    
            />
        </Carousel>
    </>
  );
}