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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:divide-x relative">

          <picture className="flex-center flex-col gap-10 h-auto relative w-full px-5">

            <div className="h-full w-full">

              <div className="flex justify-center">
                <Rating rating={product?.rating} />
              </div>

              <SlideShow imgs={product?.imgs} buttons/>

            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="mb-3">
                <AccordionTrigger className="w-full flex justify-between [&[data-state=open]>svg]:rotate-180" >

                  <span className="text-xl text-left">Especificaciones Técnicas</span>

                  <IoChevronUp className="h-7 w-7 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent  className={` ${titilium.className} w-full space-y-8 relative py-3 text-gray-300 text-lg`}>
                  {product?.especificaciones.map((especificacion,index)=>(
                    <li key={index}>{especificacion}</li>
                  ))}

                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
          </picture>

          <div className="h-full w-full">
            <div className="lg:sticky top-[60px] text-xl space-y-7 px-5 py-3 ">
              <p className="text-2xl">Marca: <Link href={`/brands/${product?.marca}`} className="hover:text-aorus duration-300">{product?.marca} </Link></p>
              <p >En stock: {product?.stock}</p>
              <h3> Precio: $/ {product?.precio}</h3>
              <p
                className={`${titilium.className} text-gray-300 max-sm:text-base font-thin relative pb-5`}
              >
              {product?.descripcion}
              </p>
              <span>Cantidad Seleccionada:</span>
              <QuantitySelector/>
              <AddToCartButton Iconsize={28} className="bg-black w-full lg:w-1/2 py-3 border hover:bg-white hover:text-black shadow-lg hover:shadow-white/50 duration-300 flex-center gap-1"/>
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
