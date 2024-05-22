"use client"
import Autoplay from "embla-carousel-autoplay"
import {Rating} from "@/components/ui";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui"
import { titilium } from "@/app/config/font";

  const reviews = [
    { rating: 5, user: "Usuario 1", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit." },
    { rating: 3, user: "Usuario 2", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit." },
    { rating: 4, user: "Usuario 3", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit." },
    { rating: 2, user: "Usuario 4", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit." },
    { rating: 5, user: "Usuario 5", review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos iusto, voluptatum eaque minus enim tenetur doloribus et. Deleniti, ducimus sit." },
  ];

export default function ReviewCarousel() {
    return (
    <div className="w-full h-auto relative flex items-center justify-center max-w-[1400px] ">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[Autoplay({ delay: 10000 })]}
          className="w-full"
        >
            <CarouselContent className="h-full">
                {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-1">
                        <div className="w-full flex-center flex-col h-full gap-5 px-5">
                            <Rating rating={review.rating}/>
                            <p className={`${titilium.className} text-center font-extralight text-sm sm:text-lg md:text-xl px-5 max-w-[800px]`}>{review.review}</p>
                            <span className="text-2xl group-hover:text-aorus duration-300">{review.user}</span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
                className=" max-lg:hidden border-none h-full left-0 w-[15%] bg-black/70 duration-300 rounded-none  z-30 group"
                iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-active:scale-110 sm:group-hover:scale-125  duration-300"
            />
            <CarouselNext
                className="max-lg:hidden border-none h-full right-0 w-[15%]  bg-black/70  duration-300 rounded-none  z-30 group"
                iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-active:scale-110 sm:group-hover:scale-125  duration-300"
            />
            <div className="w-full flex-center gap-5 pt-10 sm:hidden">
                <CarouselPrevious 
                    className="relative border h-full left-0 w-[100px] duration-300 rounded-none  z-30 group py-1" 
                    iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-hover:scale-110  duration-300" />
                <CarouselNext 
                    className="relative border h-full right-0 w-[100px] duration-300 rounded-none  group py-1" 
                    iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-hover:scale-110  duration-300" />
            </div>
        </Carousel>
    </div>
    )
}
