'use client';
import { products } from "@/app/data/data";
import { CustomImage } from "@/components/ui";
import {AiOutlineInfoCircle} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"
import { FiEdit } from "react-icons/fi";
import { MdOutlineUnfoldMore } from "react-icons/md";
import {Pagination} from "@/components/ui";
import { Suspense } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
export default function ProvidersTbl() {
  return (
    <section className="w-full flex flex-col gap-5">
    <table className="table-auto text-center w-full">
      <thead className=" border-b-aorus border-b  relative text-xl ">
        <tr className="h-16">
          <td >
            Codigo
          </td>
          <td className="text-left">
            Ruc
          </td>
          <td className="text-left">
            Nombre
          </td>
          <td>
            Número
          </td>
          <td>
            Correo
          </td>
          <td>
            Web
          </td>
          <td>
            Creado
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
          <tr key={index} className="hover:bg-neutral-900 duration-300 relative h-24">
            <td className=" rounded-l-lg">
              {index}
            </td>
            <td className="text-left ">
              12345678912
            </td>
            <td className="text-left">
              {product.name}
            </td>
            <td>
              995468795
            </td>
            <td>
              aea@gmail.com
            </td>
            <td>
              www.aea.com
            </td>
            <td>
              Creado
            </td>
            <td>
              Modificado
            </td>
            <td className="rounded-r-lg space-x-2 ">
              <Popover>
                <PopoverTrigger className="p-2 rounded bg-transparent shadow-lg hover:shadow-neutral-800/40 hover:bg-black duration-300"><MdOutlineUnfoldMore size={20}/></PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2 items-start text-sm">
                  <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><AiOutlineInfoCircle size={18}/> Información</button>
                  <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><FiEdit size={18}/> Modificar</button>
                  <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><RiDeleteBin6Line size={18}/> Eliminar</button>
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