'use client'
import Image from "next/image";
import {Footer} from "@/components/shop";
import { TracingBeam } from "@/components/ui";
import { titilium } from "@/app/config/font";

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { PiMinusLight } from "react-icons/pi";
import { products } from "@/app/data/data"
import {CustomImage} from "@/components/ui";
import {UnitsSolds} from "@/components/shop";

export default function Page() {

  return (
    <>
      <main className="relative overflow-hidden">
        <TracingBeam className="w-full " beamClassName="max-sm:left-0 sm:left-6">
          <section className="relative w-full max-sm:h-[640px] h-[840px] overflow-hidden flex flex-col justify-evenly mb-20">
            <Image  src={"/images/MasVendido.webp"} alt="" width={2000} height={1680} className="parallax-animation bg-neutral-950 absolute inset-0 filter saturate-150 w-full h-full  object-cover object-center -z-30"/>

            <h2 className="z-30 relative flex items-start max-lg:flex-col  lg:gap-7 justify-start text-6xl sm:text-8xl transform duration-300  ml-[12vw] sm:ml-[7vw]">
              <span className=" animate-fade-right animate-duration-[1000ms] text-shadow-lg shadow-white/40">Lo</span>
              <span className="animate-fade-right animate-duration-[2000ms] text-shadow-lg shadow-white/40">Más</span>
              <span className="animate-fade-right animate-duration-[3000ms] text-shadow-lg shadow-white/40">Vendido</span>
            </h2>

            <ul className={`${titilium.className} text-2xl md:text-4xl font-thin space-y-5 ml-[12vw] sm:ml-[7vw]`}>
              <li>
                <ScrollLink to="producto_1" offset={-70} smooth={true} duration={500} href='#' className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit">
                  <PiMinusLight/> Producto 1 
                </ScrollLink>
              </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>
              <li className="flex items-center gap-3 hover:text-aorus duration-300 hover:gap-7 w-fit"><PiMinusLight /> Producto 1 </li>

            </ul>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent -z-20"></div>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/90 to-transparent  -z-20"></div>
            
          </section>

          <section id="producto_1" className="w-full h-screen relative flex-center pl-[12vw] sm:pl-[7vw]">


            <div className=" w-full flex flex-col relative max-lg:pr-5" >

              <div className="flex max-sm:flex-col-reverse gap-3 w-full justify-between max-w-7xl">
                <span className={` ${titilium.className} text-aorus text-3xl sm:text-4xl md:text-5xl font-thin text-shadow-lg shadow-aorus`}>{products[5].name}</span>
                <UnitsSolds quantity={200} duration={3} className="" CountclassName="text-4xl lg:text-7xl">
                  <p className="text-base sm:text-xl">Unidades Vendidas</p>
                </UnitsSolds>
              </div>

              <CustomImage src={"/images/Laptop.webp"} height={400} width={400} alt="" className="filter saturate-200 max-md:w-[300px] h-auto"/>

               <p className={`${titilium.className }  text-base md:text-2xl font-thin line-clamp-3 text-gray-300 sm:max-w-4xl`}>{products[3].description}</p>

            </div>

          </section>

          <section className="w-full h-screen flex-center">
            Producto 3
          </section>
          <section className="w-full h-screen flex-center">
            Producto 4
          </section>
          <section className="w-full h-screen flex-center">
            Producto 5
          </section>
          <section className="w-full h-screen flex-center">
            Producto 6
          </section>
          <section className="w-full h-screen flex-center">
            Producto 7
          </section>
        </TracingBeam>
      </main>
      <Footer/>
    </>

  );
}

