import Link from "next/link";

import { AiOutlineLeft } from "react-icons/ai";

import ImageUploader from "@/components/admin/inputs/image-uploader";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

import {
	Button,
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
import { MdOutlineChevronLeft } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreateBrandPage() {
	return (
		<>
			<section className="max-w-screen-2xl w-full mx-auto flex items-center justify-start gap-5">

				<Button asChild variant={"outline"} size={"icon"} className="rounded-full">
					<Link href={"/admin/brands"}><MdOutlineChevronLeft size={25} /></Link>
				</Button>

				<h1 className="text-3xl">Nuevo Marca</h1>
			</section>

			<form className="w-full flex flex-col xl:flex-row gap-5 max-w-screen-2xl mx-auto">
				<div className="flex flex-col gap-5 max-w-md w-full">
					<Card className="max-w-72">
						<CardHeader>
							<CardTitle className="text-xl font-normal">
								Estado
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Select defaultValue="en">
								<SelectTrigger className=" w-full text-sm rounded">
									<SelectValue />
								</SelectTrigger>
								<SelectContent position="popper" sideOffset={5} hideWhenDetached>
									<SelectItem value="en">Activo</SelectItem>
									<SelectItem value="dis">Inactivo</SelectItem>
								</SelectContent>
							</Select>
						</CardContent>
					</Card>

                    <Card className="max-w-md">
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
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="text-xl font-normal">Imágenes de la Marca</CardTitle>
						<CardDescription>Se mostraran como banner de la pagina</CardDescription>
					</CardHeader>
					<CardContent>
						<Carousel className="w-full h-full">
							<CarouselContent className="w-full  relative ml-0 pl-0 h-[500px]">
								<CarouselItem className="pl-0 ">
									<ImageUploader
										type="Banner para PC"
										recomendation="Recomendable con una resolucion de 2000 x 714"
										aspect="28/10"
										size={700}
									/>
								</CarouselItem>
								<CarouselItem className="pl-0">
									<ImageUploader
										type="Banner para Movil"
										recomendation="Recomendable con una resolucion de 375 x 200"
										aspect="3/4"
										size={240}
									/>
								</CarouselItem>
							</CarouselContent>

							<CarouselPrevious
								className="absolute left-0 h-full hover:text-primary rounded-none max-sm:w-[20%] sm:w-[12%] border-none bg-transparent hover:bg-muted/40"
								iconClassName="h-12 w-12 duration-200 p-2 hover:scale-110"
							/>
							<CarouselNext
								className="absolute right-0 hover:text-primary h-full rounded-none max-sm:w-[20%] sm:w-[12%] border-none bg-transparent hover:bg-muted/40"
								iconClassName="h-12 w-12 duration-200 p-2 hover:scale-110"
							/>
						</Carousel>
					</CardContent>
				</Card>
			</form>
		</>
	);
}
