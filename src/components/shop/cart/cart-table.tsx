"use client"
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import QuantitySelector from "./quantity-selector";
import RemoveProductButton from "./remove-product";

export function CartTable() {
    const cart = useCartStore(state => state.cart)

    return (
        <table className="w-full table-auto relative divide-y-2 divide-border max-sm:w-[800px]">
            <thead className=" sticky top-0 bg-background z-10 ">
                <tr className="h-16">
                    <td className=" text-xl tracking-tight leading-none">
                        Producto(s)
                    </td>
                    <td className=" text-lg tracking-tight leading-none">
                        Cantidad
                    </td>
                    <td className=" text-lg tracking-tight leading-none">
                        Precio
                    </td>
                    <td>

                    </td>
                </tr>
            </thead>
            <tbody>
                {
                    cart.length > 0 ? (
                        cart.map((product, index) => (
                            <tr key={index} className="hover:bg-muted/40 duration-200">
                                <td className="flex gap-2 items-center h-32">
                                    <Image src={"/images/Laptop.webp"} height={96} width={96} className="h-24 w-auto" alt="" />
                                    <div className="flex flex-col gap-2">
                                        <span className="font-semibold tracking-tight leading-none">{product.name}</span>
                                        <span className="text-muted-foreground">2x1</span>
                                    </div>

                                </td>
                                <td>
                                    <QuantitySelector product={product} />
                                </td>
                                <td>
                                    S/ {product.price}
                                </td>
                                <td>
                                    <RemoveProductButton product={product} />
                                </td>
                            </tr>
                        ))

                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center h-32">No tiene productos en el carrito</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}