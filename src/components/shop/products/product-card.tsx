import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { titilium } from "@/app/config/font";
import Link from "next/link";
import {CustomImage} from "@/components/ui";
import { Button } from "@/components/ui";
import { AddProduct } from "@/components/shop";
import { Product } from "@/types";

type Props={
    product:Product
}

export default function ProductCard( {product} : Props ) {
  return (
    <article className={ `${titilium.className} relative overflow-hidden w-full sm:h-[400px] h-52 bg-background flex flex-col items-center justify-around gap-2 px-4 py-2 group duration-200 hover:bg-hover group border border-hover`}>
        <div className="flex sm:flex-col max-sm:justify-start max-sm:items-center gap-2 max-sm:w-full">
            <CustomImage src={"/images/Laptop.webp"} height={240} width={240} alt="" className="filter group-hover:saturate-200 duration-200 max-sm:h-32 max-sm:w-32 aspect-square"></CustomImage>
            <div className="w-full h-auto font-thin duration-200 relative flex flex-col gap-2 sm:items-center sm:text-xl">

                <p className={`truncate max-w-[300px] max-sm:text-xl group-hover:text-primary`}>{product.name}</p>

                <span className={`sm:mx-auto`}>$/ {product.price}</span>

            </div>

        </div>



        <div className="w-full relative flex justify-between items-center max-sm:justify-end gap-3">
            <Button asChild   className=" flex-center gap-1">
                <Link href={`/product/${product.slug}`} >
                     Más información
                    <LuArrowUpRightFromCircle size={18}/>
                </Link>
            </Button>

            <AddProduct product={product} className="flex-center w-12"/>
        </div>

  </article>
  );
}