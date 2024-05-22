import Link from "next/link"
import { titilium } from "@/app/config/font"
import {CustomImage} from "@/components/ui"

export default function OtherProductCard() {
  return (
    <article className="w-80 h-96 flex flex-col items-center justify-around border group hover:border-aorus duration-300">
        <CustomImage width={240} height={240} src={"/images/Laptop.webp"} className="filter group-hover:saturate-[3] duration-300" alt=""></CustomImage>
        <span className={`${titilium.className} font-thin truncate max-w-[300px] group-hover:text-aorus duration-300 `}>NOMBRE DEL PRODUCTO</span>
        <Link href={"/producto/producto"} className="bg-black w-1/2 py-1 rounded-corners border hover:bg-aorus shadow-lg hover:border-aorus hover:shadow-aorus/50 duration-300 flex-center ">Ver Producto</Link>
    </article>
  )
}
