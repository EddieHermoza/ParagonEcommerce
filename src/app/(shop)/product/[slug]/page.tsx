import {Title} from "@/components/ui";
import {Rating} from "@/components/ui";
import { titilium } from "@/app/config/font";
import {SlideShow} from "@/components/ui";
import Link from "next/link";
import {OtherProductsGrid} from "@/components/shop";
import {ReviewCarousel} from "@/components/shop";
import {AddToCartButton} from "@/components/shop";
import {QuantitySelector} from "@/components/shop";
import { products } from "@/app/data/data";
import {IoChevronUp} from 'react-icons/io5'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui"
import {Footer} from "@/components/shop";



export default function Page({ params }: { params: { slug: string } }) {

  const product = products.find(product => product.slug === params.slug )



  return (
    <>
    <main>
      <section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col items-center">
        <Title title={product?.name} />
        <div className="relative grid w-full grid-cols-1 lg:grid-cols-2 lg:divide-x">

          <picture  className="relative flex-col w-full h-auto gap-10 px-5 flex-center">

            <div className="w-full h-full">

              <div className="flex justify-center">
                <Rating rating={product?.rating} />
              </div>

              <SlideShow imgs={product?.imgs} buttons/>

            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="mb-3">
                <AccordionTrigger className="w-full flex justify-between [&[data-state=open]>svg]:rotate-180" >

                  <span className="text-xl text-left">Especificaciones Técnicas</span>

                  <IoChevronUp className="transition-transform duration-200 h-7 w-7 shrink-0" />
                </AccordionTrigger>
                <AccordionContent  className={` ${titilium.className} w-full space-y-8 relative py-3 text-gray-300 text-lg`}>
                  {product?.especs.map((especificacion,index)=>(
                    <li key={index}>{especificacion}</li>
                  ))}

                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          </picture>

          <div className="w-full h-full">
            <div className="lg:sticky top-[60px] text-xl space-y-7 px-5 py-3 ">
              <p className="text-2xl">Marca: <Link href={`/brands/${product?.brand}`} className="duration-300 hover:text-aorus">{product?.brand} </Link></p>
              <p >En stock: {product?.stock}</p>
              <h3> Precio: $/ {product?.price}</h3>
              <p
                className={`${titilium.className} text-gray-300 max-sm:text-base font-thin relative pb-5`}
              >
              {product?.description}
              </p>
              <Link href="https://www.aorus.com/es-pe" target="_blank" className="underline duration-300 hover:text-aorus underline-offset-4 hover:underline-offset-8 ">Más Información</Link>
              <p>Cantidad Seleccionada:</p>
              <QuantitySelector/>
              <AddToCartButton Iconsize={28} className="w-full gap-1 py-3 btn-secondary lg:w-1/2 flex-center"/>

            </div>

          </div>
        </div>
      </section>

      <section className="w-full relative flex flex-col items-center pb-[60px] ">
        <Title title="RESEÑAS" />
        <ReviewCarousel/>
      </section>
      
      <section className="w-full relative flex flex-col items-center pb-[60px]">
        <Title title="OTROS PRODUCTOS" />
        <OtherProductsGrid />
      </section>
    </main>
    <Footer/>
    
    </>
  );
}
