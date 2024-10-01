"use client"
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Brand, Category } from "@/types/types";
import { Button, LinkTransition } from "@/components/ui";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui"

import Link from "next/link";
import { SearchBar } from "@/components/shop";


type Props = {
	brands: Brand[]
	categories: Category[]
}

export default function SideMenuBar({ brands, categories }: Props) {
	const [Open, setOpen] = useState(false)

	function ToogleOpen() {
		setOpen(!Open)
	}

	return (
		<Sheet open={Open} onOpenChange={ToogleOpen}>
			<SheetTrigger>
				<CiMenuFries className="w-8 h-8 duration-200 hover:text-primary hover:scale-110" />
			</SheetTrigger>
			<SheetContent className="border-primary">

				<SheetHeader>
					<SheetTitle className="text-3xl">
						<Link href={"/"} onClick={ToogleOpen}>Paragon </Link>
					</SheetTitle>
				</SheetHeader>

				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionTrigger>
							MARCAS
						</AccordionTrigger>
						<AccordionContent>
							<ul className="flex flex-col py-2 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-primary space-y-3">
								{brands.map((brand, index) => (
									<LinkTransition onClick={ToogleOpen} key={index} href={`/brands/${brand.slug}`} className="w-full p-3 duration-200 rounded-sm hover:bg-hover active:bg-accent"> {brand.name}</LinkTransition>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger>
							CATEGORIAS
						</AccordionTrigger>
						<AccordionContent>
							<ul className="flex flex-col py-2 max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-track-background scrollbar-thumb-primary space-y-3">
								{categories.map((category, index) => (
									<LinkTransition onClick={ToogleOpen} key={index} href={`/categories/${category.slug}`} className="w-full p-3 duration-200 rounded-sm hover:bg-hover active:bg-accent"> {category.name}</LinkTransition>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<div className="pt-10 w-full flex flex-col gap-3">
					<Button asChild >
						<LinkTransition onClick={ToogleOpen} href="/auth/login">Iniciar Sesión</LinkTransition>
					</Button>
					<Button asChild variant={"secondary"}>
						<LinkTransition onClick={ToogleOpen} href="/auth/new-account">Registrarse</LinkTransition>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
}