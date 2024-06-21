'use client';
import { products } from "@/app/data/data";
import { CustomImage } from "@/components/ui";
import { IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { Suspense } from "react";
import {Pagination} from "@/components/ui";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export default function ProductsTbl() {
  return (
    <section className="w-full flex flex-col gap-5">
    <table className="table-auto text-center w-full">
      <thead className=" border-b-aorus border-b  relative text-xl ">
        <tr className="h-16">
          <td >
            Codigo
          </td>
          <td>
            Imagen
          </td>
          <td className="text-left">
            Nombre
          </td>
          <td>
            Estado
          </td>
          <td>
            Stock
          </td>
          <td>
            Modificado
          </td>
          <td className="">
            Acciones
          </td>
        </tr>
      </thead>
      <tbody className="text-sm relative">
        {products.map((product, index) => (
          <tr key={index} className="hover:bg-neutral-900 duration-300 relative">
            <td className=" rounded-l-lg">
              {index}
            </td>
            <td>
              <CustomImage src="/images/Laptop.webp" alt="" height={100} width={100} className="mx-auto" />
            </td>
            <td className="text-left">
              {product.name}
            </td>
            <td>
              Habilitado
            </td>
            <td className=
              {`text-shadow-lg ${
                  product.stock < 5 ? 'text-red-500 shadow-red-500/50'
                  : product.stock <= 10 ? 'text-yellow-500 shadow-yellow-500/50'
                  : 'text-green-500 shadow-green-500/50'
              }`}
              >
                {product.stock}
              </td>
            <td>
              Modificado
            </td>
            <td className="rounded-r-lg space-x-2 ">
              <Popover>
                <PopoverTrigger className="p-2 rounded bg-transparent shadow-lg hover:shadow-neutral-800/40 hover:bg-black duration-300"><MdOutlineUnfoldMore size={20}/></PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2 items-start text-sm">
                  <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><IoAddCircleOutline size={18}/> Agregar</button>
                  <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><IoRemoveCircleOutline size={18}/> Remover</button>
                </PopoverContent>
              </Popover>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="w-full flex-center">
      <Suspense> 
        <Pagination totalPages={11}/>
      </Suspense>
    </div>
  </section>
  );
}