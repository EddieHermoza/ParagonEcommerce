'use client';
import { useState } from 'react';
import { categories } from "@/app/data/data";
import { CustomImage } from "@/components/ui";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { Pagination } from "@/components/ui";
import { Suspense } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import {Category} from "@/types/types"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";



type SortConfig = {
  key: keyof Category;
  order: 'asc' | 'desc';
}

export default function CategoriesTbl() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'id', order: 'desc' });
  const [sortedCategories, setSortedCategories] = useState<Category[]>(categories);

  const handleSort = (key: keyof Category) => {

    const order = sortConfig.key === key && sortConfig.order === 'asc' ? 'desc' : 'asc';

    setSortConfig({ key, order });

    const sortedData = [...categories].sort((a, b) => {

      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;

    });

    setSortedCategories(sortedData);
  };

  return (
    <section className="w-full flex flex-col gap-5">
      <table className="table-fixed text-center w-full">
        <thead className="border-b-aorus border-b relative text-sm lg:text-base">
          <tr className="h-16">
            <td>
              <button onClick={() => handleSort('id')} className='flex-center gap-2 mx-auto active:bg-pressed hover:bg-neutral-900 p-2 rounded'>
                <HiOutlineArrowsUpDown/>
                Id
              </button>
            </td>
            <td>
              Imagen
            </td>
            <td>
              <button onClick={() => handleSort('name')} className='flex-center gap-2 mx-auto active:bg-pressed hover:bg-neutral-900 p-2 rounded'>
                <HiOutlineArrowsUpDown/>
                Nombre
              </button>
            </td>
            <td className="max-sm:hidden">
              Estado
            </td>
            <td className="max-lg:hidden">
              Creado
            </td>
            <td className="max-lg:hidden">
              Modificado
            </td>
            <td className="">
   
            </td>
          </tr>
        </thead>
        <tbody className="text-xs sm:text-sm relative">
          {sortedCategories.map((category, index) => (
            <tr key={index} className="hover:bg-neutral-900 duration-300 relative h-28">
              <td className="rounded-l-lg">
                {category.id}
              </td>
              <td>
                <CustomImage src="/images/Laptop.webp" alt="" height={96} width={96} className="mx-auto" />
              </td>
              <td>
                {category.name}
              </td>
              <td className="max-sm:hidden">
                Activo
              </td>
              <td className="max-lg:hidden">
                27-06-2024
              </td>
              <td className="max-lg:hidden">
                27-06-2024
              </td>
              <td className="rounded-r-lg space-x-2">
                <Popover>
                  <PopoverTrigger className="p-2 rounded bg-transparent shadow-lg hover:shadow-neutral-800/40 hover:bg-black duration-300"><MdOutlineUnfoldMore size={20} /></PopoverTrigger>
                  <PopoverContent className="flex flex-col gap-2 items-start text-sm">
                    <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><AiOutlineInfoCircle size={18} /> Información</button>
                    <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><FiEdit size={18} /> Editar</button>
                    <button className="flex items-center gap-2 hover:bg-neutral-800 p-2 rounded-sm w-full"><RiDeleteBin6Line size={18} /> Eliminar</button>
                  </PopoverContent>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex-center">
        <Suspense>
          <Pagination totalPages={11} />
        </Suspense>
      </div>
    </section>
  );
}