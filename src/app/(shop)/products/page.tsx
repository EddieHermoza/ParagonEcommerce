
import {ProductGrid} from "@/components/shop";
import {Pagination} from "@/components/ui";
import {FilterProductsPage} from "@/components/shop";
import { Suspense } from "react";
import Image from "next/image";
import {Footer} from "@/components/shop";
export default function Page() {

  return (
    <>
    <main>
      <section className="relative w-full max-sm:h-[500px] h-[714px] overflow-hidden flex items-center mb-16">
          <Image  src={"/images/Ofertas.webp"} alt="" width={2000} height={714} className="parallax-animation bg-neutral-950 absolute inset-0 filter saturate-150 w-full h-full  object-cover object-center -z-30"/>

          <h2 className="z-30 relative flex items-start flex-col justify-center text-6xl sm:text-8xl transform duration-300 ml-[10vw]">
            <span className=" animate-fade-right animate-duration-[1000ms] text-shadow-lg shadow-white/40">Todos   </span>
            <span className="animate-fade-right animate-duration-[2000ms] text-shadow-lg shadow-white/40">Los      </span>
            <span className="animate-fade-right animate-duration-[3000ms] text-shadow-lg shadow-white/40">Productos</span>
          </h2>

          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent -z-20"></div>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-transparent  -z-20"></div>
        </section>

        <section className="min-h-[calc(100vh-130px)] w-full relative flex flex-col items-center">
          <div className="w-full max-w-[1500px]">
            <FilterProductsPage/>
          </div>
          <ProductGrid/>
          <div className="w-full flex-center py-5">
            <Suspense>          
              <Pagination totalPages={11}/>
            </Suspense>
          </div>
        </section>
    </main>
    <Footer/>
    </>
  );
}