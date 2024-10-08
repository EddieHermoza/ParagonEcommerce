"use client";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useState } from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { titilium } from "@/app/config/font";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui";
import { useCartStore } from "@/store/cart-store";
import RemoveProductButton from "./remove-product";

const CartIcon = ({ click }: { click: () => void }) => {
    const totalQuantity = useCartStore((state) => state.getTotalProductsQuantity());

    return (
        <Button variant={"outline"} onClick={click} className="duration-200 w-14 flex-center gap-2" size={"icon"}>
            {totalQuantity}
            <PiShoppingCartSimple size={22} />
        </Button>
    );
};

const Content = ({ click }: { click: () => void }) => {
    const cartProducts = useCartStore(state => state.cart);
    const cartTotalPrice = useCartStore((state) => state.getFinalPrice());
    return (
        <>
            <div className="relative w-full overflow-y-auto h-96 scrollbar-thin scrollbar-track-background scrollbar-thumb-primary">
                {cartProducts.length > 0 ? (
                    cartProducts.map((product, index) => (
                        <div
                            key={index}
                            className="duration-200 hover:bg-muted/40 relative flex justify-between items-center w-full px-5 h-32 rounded"
                        >
                            <div className="flex gap-3">
                                <Image src={"/images/Laptop.webp"} height={90} width={90} alt="" />
                                <div className="flex flex-col justify-center gap-1">
                                    <span className={`${titilium.className}  sm:text-lg max-w-[200px] sm:max-w-[400px] truncate`}>
                                        {product.name}
                                    </span>
                                    <span className="max-sm:text-xs text-sm text-muted-foreground">
                                        {product.quantity} <span> x </span> S/ {product.price}
                                    </span>
                                    <span className=" leading-none tracking-tight text-primary-foreground ">
                                        S/ {product.quantity * product.price}
                                    </span>
                                </div>
                            </div>
                            <RemoveProductButton product={product} />
                        </div>
                    ))
                ) : (
                    <div className="h-32 flex-center">
                        <span >
                            No tiene productos en su carrito
                        </span>
                    </div>
                )}
            </div>

            <div className="flex flex-col items-center justify-between gap-3 px-5 mt-4 text-xl">
                <span>Total: S/ {cartTotalPrice}</span>
                <Button asChild className="w-full text-xl" onClick={click}>
                    <Link href={"/cart"}>Ir a Pagar</Link>
                </Button>
            </div>
        </>
    );
};

export function CartButton() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const toggleOpen = () => setOpen(!open);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <CartIcon  click={toggleOpen}/>
                <DialogContent className="sm:max-w-[768px]">
                    <DialogHeader>
                        <DialogTitle>Tu Carrito</DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-[550px] relative flex flex-col justify-between">
                        <Content click={toggleOpen} />
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <CartIcon  click={toggleOpen}/>
            <DrawerContent className="rounded-t-xl border-t-primary">
                <DrawerHeader className="text-center">
                    <DrawerTitle>Tu Carrito</DrawerTitle>
                </DrawerHeader>
                <div className="w-full h-[550px] relative flex flex-col justify-start">
                    <Content click={toggleOpen} />
                </div>
            </DrawerContent>
        </Drawer>
    );
}