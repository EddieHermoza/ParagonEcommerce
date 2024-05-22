
import { titilium } from "@/app/config/font";
import Link from "next/link";
import {AddToCartButton} from "@/components/shop";
import {CustomImage} from "@/components/ui";

type Props={
    tittle : string
    price : number
    img : string
    url : string
}

export default function ProductCard( props : Props ) {
  return (
    <article className={ `${titilium.className} w-full h-[400px] border bg-neutral-950 flex flex-col items-center justify-around gap-2 px-4 py-2 group relative rounded hover:border-aorus duration-300`}>
        <CustomImage src={props.img} height={240} width={240} alt="" className="filter group-hover:saturate-200 duration-300"></CustomImage>


        <div className="w-full h-auto font-thin duration-300 relative flex flex-col gap-2 items-center text-xl">

            <p className={`truncate max-w-[300px]`}>{props.tittle}</p>

            <span className={`mx-auto`}>$/ {props.price}</span>

        </div>


        <div className="w-full relative flex justify-between items-center gap-3">

        <AddToCartButton className="bg-black w-1/2 py-1 rounded-corners border hover:bg-white hover:text-black shadow-lg hover:shadow-white/50 duration-300 flex-center gap-1"/>

        <Link href={props.url} className="bg-black w-1/2 py-1 rounded-corners border hover:bg-aorus shadow-lg hover:border-aorus hover:shadow-aorus/50 duration-300 flex-center">
            Ver más
        </Link>

        </div>

  </article>
  );
}