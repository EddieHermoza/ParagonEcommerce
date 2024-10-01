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
    <div className="h-auto relative flex-center w-full">
        <Carousel
          opts={{ loop: true, align: "center" }}
          plugins={[Autoplay({ delay: 10000 })]}
          className="w-full"
        >
            <CarouselContent className="h-full">
                {reviews.map((review, index) => (
                    <CarouselItem key={index} className="pl-3">
                        <div className="w-full flex-center flex-col h-full gap-5 px-5">
                            <Rating rating={review.rating}/>
                            <p className={`${titilium.className} text-center font-extralight text-sm sm:text-lg md:text-xl px-5 max-w-screen-lg line-clamp-3`}>{review.review}</p>
                            <span className="text-2xl group-hover:text-primary duration-200">{review.user}</span>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
                <CarouselPrevious 
					className="max-xl:hidden h-full border-none hover:bg-muted/40 rounded-none bg-transparent w-40 left-0 hover:text-primary duration-200"
						iconClassName="h-8 w-8"
				/>
				<CarouselNext 
					className="max-xl:hidden h-full border-none hover:bg-muted/40 rounded-none bg-transparent w-40 right-0 hover:text-primary duration-200"
					iconClassName="h-8 w-8"
				/>
                <div className="xl:hidden relative">
                    <CarouselPrevious 
                        className=" border hover:bg-muted/40 rounded-none bg-transparent w-20 h-16 left-5 hover:text-primary duration-200"
                            iconClassName="h-6 w-6"
                    />
                    <CarouselNext 
                        className="border hover:bg-muted/40 rounded-none bg-transparent w-20 h-16 right-5 hover:text-primary duration-200"
                        iconClassName="h-6 w-6"
                    />
                </div>
        </Carousel>
    </div>
    )
}
