import Link from "next/link";
import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from "@/components/ui/card"

import ProductSpecificationsInput from "@/components/admin/inputs/ProductSpecificationsInput";
import ImageUploader from "@/components/admin/inputs/ImageUploader";
import { Button } from "@/components/ui";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function CreateProductPage() {

    return (
        <>
            <section className="max-w-screen-2xl w-full mx-auto flex items-center justify-start gap-5">
                <Button asChild variant={"outline"} size={"icon"} className="rounded-full hover:text-primary">
                    <Link href={"/admin/products"} ><MdOutlineChevronLeft size={25} /></Link>
                </Button>

                <h1 className="text-3xl">Nuevo Producto</h1>

            </section>

            <form className="w-full flex flex-col lg:flex-row gap-5 max-w-screen-2xl mx-auto">

                <div className="flex flex-col gap-5 max-w-screen-md w-full">

                    <Card className="max-w-72">
                        <CardHeader>
                            <CardTitle className="text-xl font-normal">
                                Estado
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Select >
                                <SelectTrigger className="hover:bg-secondary">
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                                    <SelectItem value="1">Activo</SelectItem>
                                    <SelectItem value="0">Inactivo</SelectItem>
                                </SelectContent>
                            </Select>
                        </CardContent>
                    </Card>

                    <Card className="max-w-screen-md">
                        <CardHeader>
                            <CardTitle className="text-xl font-normal">Detalles</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <label className="flex flex-col gap-2">
                                <span>Nombre</span>
                                <Input id="name" />
                            </label>

                            <label className="flex flex-col gap-2">
                                <span>Descripción</span>
                                <Textarea id="description" />

                            </label>
                        </CardContent>
                    </Card>

                    <div className="flex max-md:flex-col w-full gap-5">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-normal">Marca</CardTitle>
                            </CardHeader>
                            <CardContent>

                                <Select >
                                    <SelectTrigger className="hover:bg-secondary">
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                                        <SelectItem value="0">Proveedor 1</SelectItem>
                                        <SelectItem value="1">Proveedor 2</SelectItem>
                                        <SelectItem value="2">Proveedor 3</SelectItem>
                                        <SelectItem value="3">Proveedor 4</SelectItem>
                                    </SelectContent>
                                </Select>

                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-normal">Categoria</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Select>
                                    <SelectTrigger className="hover:bg-secondary">
                                        <SelectValue placeholder="Seleccionar" />
                                    </SelectTrigger>
                                    <SelectContent position="popper" sideOffset={5} hideWhenDetached>
                                        <SelectItem value="0">Categoria 1</SelectItem>
                                        <SelectItem value="1">Categoria 2</SelectItem>
                                        <SelectItem value="2">Categoria 3</SelectItem>
                                        <SelectItem value="3">Categoria 4</SelectItem>
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex max-md:flex-col w-full gap-5">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-normal">Precio de Compra</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Input id="name" type="number" />
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl font-normal">Precio de Venta</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Input id="name" type="number" />
                            </CardContent>
                        </Card>
                    </div>



                </div>

                <div className="w-full flex flex-col gap-5">

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-normal">
                                Especificaciones del producto
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ProductSpecificationsInput />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-normal">
                                Imagenes
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ImageUploader />
                        </CardContent>
                    </Card>

                </div>

            </form>


        </>
    );
}