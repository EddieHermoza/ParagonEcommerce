
import Link from 'next/link';

import { AiOutlineLeft } from "react-icons/ai";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function CreateProviderPage() {

    return (
    <>
        <h1 className="text-5xl">Nuevo Proveedor</h1>

        <form action="" className="w-full flex gap-10 ">

            <div className="space-y-10 w-full">

                <div className="flex w-full gap-5">

                    <Link href={"/admin/providers"} className="btn-secondary p-2 rounded flex-center"><AiOutlineLeft/></Link>
                    
                    <button className="btn-primary px-5 py-2 rounded">Guardar Proveedor</button>

                </div>

                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5 max-w-[300px]">
                    <h3 className="text-xl tracking-tight leading-none">Estado del Proveedor</h3>
                    <Select defaultValue="en">
                        <SelectTrigger className=" w-full text-sm rounded">
                                <SelectValue/>
                        </SelectTrigger>
                        <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                            <SelectItem value="en">Activo</SelectItem>
                            <SelectItem value="dis">Inactivo</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className='w-full flex gap-10'>

                    <div className='w-full flex flex-col  gap-5 bg-black border-neutral-800 border p-5'>
                        <h3 className="text-xl tracking-tight leading-none">Detalles del proveedor</h3>

                        <div className='flex gap-5 w-full'>

                            <div className=" flex flex-col gap-5 w-full">
                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Ruc:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>

                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Nombre:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>

                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Razón Social:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>
                            </div>

                            <div className=" flex flex-col gap-5 w-full">
                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Web:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>

                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Número telefonico:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>

                                <label htmlFor="" className="space-y-2 text-sm">
                                    <span className=" peer-focus:text-white duration-200">Correo ELectrónico:</span>
                                    <input 
                                    type="text" 
                                    name="" 
                                    id=""
                                    className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                                </label>
                            </div>

                        </div>

                    </div>

                    <div className='bg-black border border-neutral-800 p-5 flex flex-col gap-5 max-w-[560px] w-full rounded'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-xl tracking-tight leading-none'>Contacto Directo</h3>
                            <span className='text-sm text-gray-400'> Opcional</span> 
                        </div>

                        <label htmlFor="" className="space-y-2 text-sm">
                            <span className=" peer-focus:text-white duration-200">Nombre:</span>
                            <input 
                            type="text" 
                            name="" 
                            id=""
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                        </label>

                        <label htmlFor="" className="space-y-2 text-sm">
                            <span className=" peer-focus:text-white duration-200">Número telefonico:</span>
                            <input 
                            type="text" 
                            name="" 
                            id=""
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                        </label>

                        <label htmlFor="" className="space-y-2 text-sm">
                            <span className=" peer-focus:text-white duration-200">Correo ELectrónico:</span>
                            <input 
                            type="text" 
                            name="" 
                            id=""
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                        </label>
                    </div>

                </div>

            </div>

        </form>

    </>
    );
}