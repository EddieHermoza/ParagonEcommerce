
import Link from 'next/link';

import { AiOutlineLeft } from "react-icons/ai";

import ImageCategoryUploader from "@/components/admin/inputs/imageCategoryUploader";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function CreateCategoryPage() {

    return (
    <>
        <h1 className="text-5xl">Nueva Categoria</h1>

        <form action="" className="w-full flex gap-10 ">

            <div className="space-y-10 w-full max-w-[560px]">

                <div className="flex w-full gap-5">

                    <Link href={"/admin/categories"} className="btn-secondary p-2 rounded flex-center"><AiOutlineLeft/></Link>
                    
                    <button className="btn-primary px-5 py-2 rounded">Guardar Categoria</button>

                </div>

                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5 max-w-[300px]">
                    <h3 className="text-xl tracking-tight leading-none">Estado de la Categoria</h3>
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

                <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5">
                    <h3 className="text-xl tracking-tight leading-none">Detalles de la Categoria</h3>
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
                            cols={30} 
                            rows={10}
                            className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent rounded" ></textarea>
                    </label>

                </div>

            </div>

            <ImageCategoryUploader
                title="Imagen referencial de la categoria"
                description="Arrastra la imagen aquí o haz clic para seleccionar"
                recomendation="Se recomienda una resolucion 400 x 400"
            />
        </form>

    </>
    );
}