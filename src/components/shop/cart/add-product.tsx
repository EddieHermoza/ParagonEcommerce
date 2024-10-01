"use client"
import { CiShoppingCart } from "react-icons/ci";
import { VscLoading } from "react-icons/vsc";
import { Button } from "@/components/ui";
import { useCartStore } from "@/store/cart-store";
import { useState } from "react";
import { sleep } from "@/lib/utils";
import { CartProduct, Product } from "@/types";


type Props={
    text?:string,
    iconSize?:number
    className?:string,
    textClassName?:string,
    product:Product
}

export default function AddProduct({ text, className, product, iconSize=18,textClassName }: Props) {
    const addCartProduct = useCartStore(state => state.addProduct)
    const [loading, setLoading] = useState(false)

    const addToCart = async () => {
        setLoading(true)

        await sleep(1000)

        const cartProduct: CartProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            discount: 0,
            maxQuantity: product.stock,
            quantity: 1,
        };

        addCartProduct(cartProduct)
        setLoading(false)
    };

    return (
        <Button
            size={"icon"}
            onClick={addToCart}
            disabled={loading}
            variant={"secondary"}
            className={`${className} bg-white text-black hover:shadow-md hover:shadow-white/50 hover:bg-white/80 duration-200  ${loading ? "shadow-md shadow-white/50" : ""}`} 
        >
            {loading ? (
                <VscLoading size={iconSize} className="animate-spin ease-in-out" />
            ) : (
                <>
                    <span className={textClassName}>{text}</span> <CiShoppingCart size={iconSize} />
                </>
            )}
        </Button>
    );
}