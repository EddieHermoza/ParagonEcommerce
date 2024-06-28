'use client';
import { products } from "@/app/data/data";
import { CustomImage } from "@/components/ui";
import { IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { Suspense } from "react";
import {Pagination} from "@/components/ui";
import { Product } from "@/types/types";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type SortConfig = {
  key: keyof Product;
  order: 'asc' | 'desc';
}

export default function ProductsTbl() {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'id', order: 'desc' });
  const [sortedProducts, setSortedProducts] = useState <Product[]>(products);

  const handleSort = (key: keyof Product) => {

    const order = sortConfig.key === key && sortConfig.order === 'asc' ? 'desc' : 'asc';

    setSortConfig({ key, order });

    const sortedData = [...products].sort((a, b) => {

      if (a[key] < b[key]) {
        return order === 'asc' ? -1 : 1;
      }

      if (a[key] > b[key]) {
        return order === 'asc' ? 1 : -1;
      }

      return 0;

    });

    setSortedProducts(sortedData);
  };
  return (
    <section className="w-full flex flex-col gap-5">
    <table className="table-auto text-center w-full">
      <thead className=" border-b-aorus border-b  relative text-sm lg:text-base ">
        <tr className="h-16">
          <td >
            <button onClick={() => handleSort('id')} className='flex-center gap-2 mx-auto active:bg-pressed hover:bg-neutral-900 p-2 rounded'>
                <HiOutlineArrowsUpDown/>
                Id
            </button>
          </td>
          <td className="max-sm:hidden">
            Imagen
          </td>
          <td>
            <button onClick={() => handleSort('name')} className='flex-center gap-2 active:bg-pressed hover:bg-neutral-900 p-2 rounded'>
                <HiOutlineArrowsUpDown/>
                Nombre
            </button>
          </td>
          <td className="max-lg:hidden">
            Estado
          </td>
          <td>
            <button onClick={() => handleSort('stock')} className='flex-center gap-2 mx-auto active:bg-pressed hover:bg-neutral-900 p-2 rounded'>
                <HiOutlineArrowsUpDown/>
                Stock
            </button>
          </td>
          <td className="max-lg:hidden">
            Ultimo Ingreso
          </td>
          <td className="">
            Acciones
          </td>
        </tr>
      </thead>
      <tbody className="text-sm relative">
        {sortedProducts.map((product, index) => (
          <tr key={index} className="hover:bg-neutral-900 duration-300 relative h-24">
            <td className=" rounded-l-lg">
              {product.id}
            </td>
            <td className="max-sm:hidden">
              <CustomImage src="/images/Laptop.webp" alt="" height={100} width={100} className="mx-auto" />
            </td>
            <td className="text-left max-sm:text-xs">
              {product.name}
            </td>
            <td className="max-lg:hidden">
              Activo
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
            <td className="max-lg:hidden">
              27-06-2024
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