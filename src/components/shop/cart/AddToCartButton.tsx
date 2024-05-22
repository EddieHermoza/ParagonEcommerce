"use client"
import { CiShoppingCart } from "react-icons/ci";
import { VscLoading } from "react-icons/vsc";

type Props={
    className?:string
    Iconsize?:number
}

export default function AddToCartButton(props:Props) {
    return (
        <button className={`${props.className} relative`}>
            Añadir al <CiShoppingCart size={props.Iconsize}/>
        </button>
    )
}
