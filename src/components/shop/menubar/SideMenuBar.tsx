"use client"
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Brand,Category } from "@/types/types";
import {IoChevronUp} from 'react-icons/io5' 
import {LinkTransition} from "@/components/ui";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui"

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui"

import Link from "next/link";
import {SearchBar} from "@/components/shop";


type Props={
  brands:Brand[]
  categories:Category[]
}

export default function SideMenuBar({brands,categories}:Props) {
  const [Open,setOpen] = useState(false)

  function ToogleOpen() {
    setOpen(!Open)
  }

  return (
      <Sheet open={Open} onOpenChange={ToogleOpen}>
        <SheetTrigger>
            <CiMenuFries className="w-8 h-8 duration-300 transform hover:text-aorus hover:scale-110"/>
        </SheetTrigger>
        <SheetContent className="bg-black border-aorus">

          <SheetHeader>
            <SheetTitle className="text-3xl">
              <Link href={"/"} onClick={ToogleOpen}>Paragon </Link>
            </SheetTitle>
          </SheetHeader>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="max-sm:text-lg text-xl [&[data-state=open]>svg]:rotate-180">
                Marcas
                <IoChevronUp className="transition-transform duration-200 h-7 w-7 shrink-0" />
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col py-5 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-aorus space-y-3">
                  {brands.map((brand,index)=>(
                    <LinkTransition onClick={ToogleOpen} key={index} href={`/brands/${brand.slug}`} className="w-full p-3 duration-300 rounded-sm hover:bg-neutral-800"> {brand.name}</LinkTransition>
                  ))}
                </ul>   
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="max-sm:text-lg [&[data-state=open]>svg]:rotate-180">
                Categorias
                <IoChevronUp className="transition-transform duration-200 h-7 w-7 shrink-0" />
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col py-5 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-aorus space-y-3">
                  {categories.map((category,index)=>(
                    <LinkTransition onClick={ToogleOpen} key={index} href={`/categories/${category.slug}`} className="w-full p-3 duration-300 rounded-sm hover:bg-neutral-800"> {category.name}</LinkTransition>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        <div className="w-full pt-10">
          <SearchBar/>
        </div>
        <div className=" pt-10 w-full flex flex-col gap-3 text- max-sm:text-sm">
          <LinkTransition  onClick={ToogleOpen} href="/auth/login" className="w-full flex-center btn-secondary py-3">Iniciar Sesión</LinkTransition>
          <LinkTransition  onClick={ToogleOpen} href="/auth/new-account" className="w-full flex-center btn-secondary py-3">Registrarse</LinkTransition>
        </div>
        </SheetContent>
      </Sheet>
  );
}