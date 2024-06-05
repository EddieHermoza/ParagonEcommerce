import { brands,categories } from "@/app/data/data";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import {Glitch} from "@/components/ui";
import SideMenuBar from "./SideMenuBar";
import { CartDialog } from "./CartDialog";
import UserLinks from "./UserLinks";
import {TopSearchBar} from "@/components/shop";
import {LinkTransition} from "@/components/ui";



export default function MenuBar() {
  return (
    <header className="w-screen sticky top-0 insets-0 flex justify-between items-center z-50 bg-black h-[60px]">
      <nav className="relative flex justify-start items-center h-full w-auto ">
          <Glitch tittle="Paragon" height={60} width={260} fontSize={40}/>
          <ul className="w-auto relative h-full flex justify-start max-lg:hidden">

              <li className="group h-full flex justify-center items-center pr-3">
                <span className="flex gap-2 justify-center items-center text-lg group-hover:text-aorus cursor-pointer h-full " > Marcas <FaChevronDown className="rotate-180 group-hover:rotate-0 transform duration-300"/> </span>
                <ul className="w-[100%] -ml-[100%] h-40 bg-black/60 fixed top-[60px] left-0 group-hover:ml-0 transform duration-300 flex-wrap flex items-center justify-center gap-x-7 border-b">
                  {brands.map((brand,index)=>(
                    <LinkTransition key={index} href={`/brands/${brand.slug}`}  className="text-lg duration-300 hover:text-aorus underline underline-offset-4 hover:underline-offset-8"> { brand.name}</LinkTransition>
                  ))}           
                </ul>
              </li>

              <li className="group h-full flex justify-center items-center px-3">
                <span className="flex gap-2 justify-center items-center text-lg group-hover:text-aorus transform duration-300 cursor-pointer"> Categorias <FaChevronDown className="rotate-180 group-hover:rotate-0 transform duration-300"/> </span>
                <ul className="w-[100%] ml-[100%] h-40 bg-black/60 fixed top-[60px] left-0 group-hover:ml-0 transform duration-300 flex-wrap flex items-center justify-center gap-x-7 border-b ">
                  {categories.map((category,index)=>(
                      <LinkTransition key={index} href={`/categories/${category.slug}`} className="text-lg duration-300 hover:text-aorus underline underline-offset-4 hover:underline-offset-8"> { category.name}</LinkTransition>
                    ))}   
                </ul>
              </li>

              <li className="h-full flex justify-center items-center pl-3">
                <Link href={"/about"} className="text-lg hover:text-aorus transfom duration-300">Nosotros</Link>
              </li>

          </ul>
      </nav>
      <div className="w-full h-full flex justify-end items-center gap-5 pr-5 relative">
        <div className="max-lg:hidden h-8">
          <TopSearchBar/>
        </div>
        <CartDialog/>
        <div className="max-lg:hidden relative h-full">
          <UserLinks/>
        </div>
        <div className="lg:hidden h-8">
          <SideMenuBar categories={categories} brands={brands}/>
        </div>
      </div>
    </header>

  );
}