import { PiShoppingCartSimple } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CartTable } from "@/components/shop/cart/cart-table";
import { CartDetails } from "@/components/shop/cart/details-container";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
    CardFooter
} from "@/components/ui/card"

export default function Page() {

    return (
        <>
            <main className="relative w-full h-auto flex max-xl:flex-col gap-5 ">
                <div className="w-full relative xl:h-[calc(100vh-130px)] flex flex-col gap-5 xl:p-5 py-5">
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle className="text-lg flex gap-2 items-end">
                              <Image src={"/images/Logo.webp"} width={40} height={40} alt=""/>
                                A punto de realizar tu pedido
                            </CardTitle>
                            <CardDescription>
                                Confirma las cantidades de cada producto que desees.
                            </CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="h-[600px] w-full ">
                        <CardHeader>
                            <CardTitle className="flex gap-2 items-center ">
                                <PiShoppingCartSimple size={28} />
                                Tu carrito
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="overflow-auto h-[500px] w-full scrollbar-thin scrollbar-track-background scrollbar-thumb-primary relative">
                            <CartTable/>
                        </CardContent>
                    </Card>   
                </div>

                <Card className="xl:h-[calc(100vh-130px)] xl:max-w-screen-xs w-full xl:border-none xl:rounded-none xl:shadow-none">
                    <CardHeader>
                        <CardTitle>
                                Detalles
                        </CardTitle>
                        <CardDescription>
                        Asegúrate de revisar todos los detalles antes de continuar con el pago.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-10 border-t-2 border-border p-6">
                        <CartDetails/>
                    </CardContent>
                    <CardFooter className="p-6 flex flex-col gap-5">
                        <Button variant={"secondary"} asChild className="sm:text-lg w-full">
                            <Link href={"/"}>
                                Continuar Comprando
                            </Link>
                        </Button>
                        <Button asChild className="sm:text-lg w-full">
                            <Link href={"/checkout"}>
                                Proceder a Pagar
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

            </main>
        </>
    );
}