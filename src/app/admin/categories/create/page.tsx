import Link from "next/link";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/admin/inputs/image-uploader";

export default function CreateCategoryPage() {
	return (
		<>
			<section className="max-w-screen-2xl w-full mx-auto flex items-center justify-start gap-5">

				<Button asChild variant={"outline"} size={"icon"} className="rounded-full">
					<Link href={"/admin/brands"}><MdOutlineChevronLeft size={25} /></Link>
				</Button>

				<h1 className="text-3xl">Nueva Categoria</h1>
			</section>

			<form action="" className="w-full flex flex-col lg:flex-row gap-10 max-w-screen-2xl mx-auto">

				<div className="space-y-10 w-full max-w-lg">
					<Card className="max-w-72">
						<CardHeader>
							<CardTitle>
								Estado
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Select defaultValue="en">
								<SelectTrigger className="w-full text-sm rounded">
									<SelectValue />
								</SelectTrigger>
								<SelectContent position="popper" sideOffset={5} hideWhenDetached>
									<SelectItem value="en">Activo</SelectItem>
									<SelectItem value="dis">Inactivo</SelectItem>
								</SelectContent>
							</Select>
						</CardContent>
					</Card>

					<Card className="max-w-lg">
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

				<Card className="w-full">
					<CardHeader>
						<CardTitle className="text-xl font-normal">Imagen</CardTitle>
						<CardDescription>Se mostrará como referencia a la categoria</CardDescription>
					</CardHeader>
					<CardContent>
						<ImageUploader
							type="Imagen"
							recomendation="Recomendable con una resolucion de 400 x 400"
							aspect="1/1"
							size={400}
						/>
					</CardContent>
				</Card>
			</form>
		</>
	);
}
