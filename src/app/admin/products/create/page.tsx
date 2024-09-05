import Link from "next/link";

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import ProductSpecificationsInput from "@/components/admin/inputs/ProductSpecificationsInput";
import ImageUploader from "@/components/admin/inputs/ImageUploader";

export default function CreateProductPage() {

    return (
    <>
        <h1 className="text-4xl">Nuevo Producto</h1>

        <form className="w-full flex flex-col lg:flex-row gap-7">

            <div className="flex flex-col gap-7 max-w-screen-md w-full">
                
                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-3 max-w-[300px]">
                    <h3 className="text-lg tracking-tight leading-none">Estado</h3>
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

                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-4">
                    <h3 className="text-lg tracking-tight leading-none">Detalles del Producto</h3>
                    <label htmlFor="" className="space-y-2 text-sm">
                        <span className=" peer-focus:text-white duration-200">Nombre:</span>
                        <input 
                        type="text" 
                        name="" 
                        id=""
                        className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                    </label>

                    <label htmlFor="" className="space-y-2 text-sm" >
                        <span>Descripcion: </span>
                        <textarea 
                        name="" 
                        id="" 
                        cols={40} 
                        rows={3}
                        className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent rounded" ></textarea>
                    </label>

                    <label htmlFor="" className="space-y-2 text-sm">
                        <span className=" peer-focus:text-white duration-200">Link para más información:</span>
                        <input 
                        type="text" 
                        name="" 
                        id=""
                        className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                    </label>
                </div>

                <div className="bg-black p-5 rounded border-neutral-800 border flex  flex-col gap-4 w-full">
                    <h3 className="text-lg tracking-tight leading-none">Clasificación del Producto</h3>
                    <div className="flex w-full gap-4">
                        <div className="space-y-2 text-sm w-full">
                            <span>Marca:</span>
                            <Select>
                                <SelectTrigger className="w-full rounded text-sm">
                                        <SelectValue placeholder={"Seleccionar"}/>
                                </SelectTrigger>
                                <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                                    <SelectItem value="en">Activo</SelectItem>
                                    <SelectItem value="dis">Inactivo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2 text-sm w-full">
                            <span className="text-sm">Categoria:</span>
                            <Select >
                                <SelectTrigger className=" w-full rounded text-sm">
                                    <SelectValue placeholder={"Seleccionar"}/>
                                </SelectTrigger>
                                <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                                    <SelectItem value="en">Activo</SelectItem>
                                    <SelectItem value="dis">Inactivo</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>


                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-4 w-full">
                    <h3 className="text-lg tracking-tight leading-none">Configuracion de Precios</h3>
                    <div className="w-full flex gap-4">
                        <label htmlFor="" className="space-y-2 text-sm w-full">
                            <span className=" peer-focus:text-white duration-200">Precio de Compra:</span>
                            <input 
                            type="number" 
                            name="" 
                            id=""
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                        </label>

                        <label htmlFor="" className="space-y-2 text-sm w-full">
                            <span className=" peer-focus:text-white duration-200">Precio de Venta:</span>
                            <input 
                            type="number" 
                            name="" 
                            id=""
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded" />
                        </label>
                    </div>
                </div>

            </div>

            <div className="w-full flex flex-col gap-7">

                <div className="bg-black border border-neutral-800 w-full p-5 flex flex-col gap-4 rounded">
                    <h3 className="text-lg tracking-tight leading-none">Especificaciones del producto</h3>
                    <ProductSpecificationsInput/>
                </div>  
                <div className="bg-black border border-neutral-800 w-full p-5 flex flex-col gap-4 rounded">
                    <ImageUploader/>
                </div>  

            </div>

        </form>
    
    
    </>
    );
}