
import { products } from "@/app/data/data";
import { Button } from "@/components/ui";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";


export function ProductsCarousel() {
    return (
        <Carousel
            className="w-full"
            opts={{
                align: "start",
                dragFree: true
            }} >
            <CarouselContent className="-ml-0 md:ml-5">
                {products.map((product, index) => (
                    <CarouselItem key={index} className={`pl-0 basis-[65%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5`}>

                        <Card className="p-3 h-80 relative flex flex-col justify-between hover:bg-muted/40 duration-200 rounded-none">
                            <CardHeader className="p-0">
                                <CardTitle className="text-base">{product.name}</CardTitle>
                                <CardDescription className="text-lg">S/ {product.price}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 py-2 flex-center">
                                <Image src={"/images/Laptop.webp"} width={160} height={160} alt="" />
                            </CardContent>
                            <CardFooter className="p-0 flex-center">
                                <Button asChild variant={"secondary"}>
                                    <Link href={`/product/${product.slug}`}>
                                        Ver Producto
                                    </Link>
                                </Button>
                                
                            </CardFooter>
                        </Card>

                    </CarouselItem>
                ))}

            </CarouselContent>
            <div className="max-sm:hidden">
                <CarouselPrevious className="p-2 w-12 rounded-none border-none h-full group hover:bg-secondary dark:hover:text-primary disabled:text-muted-foreground" iconClassName="h-6 w-6 group-hover:scale-110 duration-200" />
                <CarouselNext className="p-2 w-12 rounded-none border-none h-full group hover:bg-secondary dark:hover:text-primary disabled:text-muted-foreground" iconClassName="h-6 w-6 group-hover:scale-110 duration-200" />
            </div>
        </Carousel>
    );
}