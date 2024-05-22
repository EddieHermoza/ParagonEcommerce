'use client'

import { useState, useEffect} from "react";


import { 

    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious, 
    type CarouselApi 
} from "@/components/ui";

import {CustomImage} from "@/components/ui";

type Props={
  imgs:string[] | undefined
  buttons:boolean
}

export default function SlideShow({imgs,buttons}:Props) {

  const [api, setApi] = useState<CarouselApi>();
  const [secondApi,setSecondApi] = useState<CarouselApi>();
  const [currentSlide,setCurrentSlide] = useState(0)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setCurrentSlide(api.selectedScrollSnap())
      secondApi?.scrollTo(api.selectedScrollSnap(),false)
    })
  }, [api])
 

  const increaseSlide = () => {
    setCurrentSlide(currentSlide=> currentSlide+1);
    return currentSlide+1
  };
  
  const decreaseSlide = () => {
    setCurrentSlide(currentSlide=> currentSlide-1);
    return currentSlide-1
  };


  const handlePrincipalCarousel = (index: number) => {
    setCurrentSlide(index)
    api?.scrollTo(index, false); 
  }

  const scroll= (index:number)=>{
    api?.scrollTo(index,false)
    secondApi?.scrollTo(index,false)
  }


  return (
    <div className="w-full flex flex-col items-center mx-auto">
      <Carousel className="relative h-[400px] w-full" setApi={setApi}>
        <CarouselContent className="h-[400px] relative">
          {imgs?.map((img, index) => (
            <CarouselItem key={index} >
              <div className="w-full flex-center h-full">
                <CustomImage
                  src={img}
                  height={400}
                  width={400}
                  alt=""
                  className={` duration-300 filter ${ index === currentSlide ? "saturate-[3] max-sm:h-[300px] max-sm:w-[300px] sm:h-[400px] sm:w-[400px]" : "h-[200px] w-[200px]"
                  }`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {buttons===true &&(
            <CarouselPrevious
            onClick={()=> { scroll(decreaseSlide()) }}
            className="border-none h-full left-0 w-[15%] duration-300 rounded-none  z-30 group"
            iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-active:scale-110 sm:group-hover:scale-125  duration-300"
            />
        )}
        {buttons===true &&(
            <CarouselNext
            onClick={()=> {scroll(increaseSlide()) } }
            className="border-none h-full right-0 w-[15%]  duration-300 rounded-none  z-30 group"
            iconClassName="text-white group-active:text-aorus sm:group-hover:text-aorus max-sm:w-8 max-sm:h-8 w-10 h-10 group-active:scale-110 sm:group-hover:scale-125  duration-300"
          />
        )}

        </Carousel>
        <span className="text-xl mb-2">Imagen {current} de {count}</span> 
        <div className="w-full h-[100px] relative sm:px-10">
          <Carousel
            opts={{dragFree:false}}
            draggable={false}
            setApi={setSecondApi} 
            className="w-full h-[100px]"
            >
            <CarouselContent className="h-[100px]">
                {imgs?.map((img, index) => (
                <CarouselItem key={index} className=" basis-1/3 lg:basis-1/4 2xl:basis-1/5">
                    <div className={`h-full flex-center hover:bg-neutral-900 cursor-pointer border duration-300 ${index===currentSlide ? "border-aorus":""}`} onClick={()=>handlePrincipalCarousel(index)}>
                        <CustomImage
                        src={img}
                        height={80}
                        width={80}
                        alt=""
                        className={`h-[80px] w-[80px] duration-300 filter ${ index === currentSlide ? "scale-[1.15] saturate-200" : ""
                        }`}
                        />
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>

          </Carousel>
        </div>
    </div>
  );
}