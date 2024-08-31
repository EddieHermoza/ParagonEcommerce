import Link from "next/link";

import { PiUploadSimpleThin } from "react-icons/pi";
import { AiOutlineLeft } from "react-icons/ai";

import BannerUploader from "@/components/admin/inputs/bannerUploader";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateBrandPage() {
  console.log("pruebacommit");
  return (
    <>
      <h1 className="text-5xl">Nueva marca</h1>

      <form action="" className="w-full flex gap-10 ">
        <div className="space-y-10 w-full max-w-[560px]">
          <div className="flex w-full gap-5">
            <Link
              href={"/admin/brands"}
              className="btn-secondary p-2 rounded flex-center"
            >
              <AiOutlineLeft />
            </Link>

            <button className="btn-primary px-5 py-2 rounded">
              Guardar Marca
            </button>
          </div>

          <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5 max-w-[300px]">
            <h3 className="text-xl tracking-tight leading-none">
              Estado de la Marca
            </h3>
            <Select defaultValue="en">
              <SelectTrigger className=" w-full text-sm rounded">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                <SelectItem value="en">Activo</SelectItem>
                <SelectItem value="dis">Inactivo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5">
            <h3 className="text-xl tracking-tight leading-none">
              Detalles de la Marca
            </h3>
            <label htmlFor="" className="space-y-2 text-sm">
              <span className=" peer-focus:text-white duration-200">
                Nombre:
              </span>
              <input
                type="text"
                name=""
                id=""
                className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent duration-200 rounded"
              />
            </label>

            <label htmlFor="" className="space-y-2 text-sm">
              <span>Descripcion: </span>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="peer border w-full outline-none focus:border-aorus p-2 bg-transparent rounded"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="bg-black p-5 rounded border-neutral-800 border flex flex-col gap-5 w-full relative">
          <h3 className="text-xl tracking-tight leading-none">
            Imagenes de la Marca
          </h3>
          <span>Se mostraran como banner de la pagina</span>
          <Carousel className="w-full h-full">
            <CarouselContent className="w-full  relative ml-0 pl-0 h-[500px]">
              <CarouselItem className="pl-0 ">
                <BannerUploader
                  type="Banner para PC"
                  recomendation="Recomendable con una resolucion de 2000 x 714"
                  aspect="28/10"
                  size={700}
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <BannerUploader
                  type="Banner para Movil"
                  recomendation="Recomendable con una resolucion de 375 x 200"
                  aspect="3/4"
                  size={240}
                />
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious
              className="absolute left-0 h-full hover:text-aorus rounded-none max-sm:w-[20%] sm:w-[12%] border-none "
              iconClassName="h-16 w-16 duration-300 p-2 hover:scale-110"
            />
            <CarouselNext
              className="absolute right-0 hover:text-aorus h-full rounded-none max-sm:w-[20%] sm:w-[12%] border-none "
              iconClassName="h-16 w-16 duration-300 p-2 hover:scale-110"
            />
          </Carousel>
        </div>
      </form>
    </>
  );
}
