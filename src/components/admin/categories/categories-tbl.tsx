'use client';
import { useState } from 'react';
import { categories } from "@/app/data/data";
import { CustomImage } from "@/components/ui";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { Pagination } from "@/components/ui";
import { Suspense } from "react";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { Category } from "@/types/types"

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';



type SortConfig = {
	key: keyof Category;
	order: 'asc' | 'desc';
}

export default function CategoriesTbl() {
	const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'id', order: 'desc' });
	const [sortedCategories, setSortedCategories] = useState<Category[]>(categories);

	const handleSort = (key: keyof Category) => {

		const order = sortConfig.key === key && sortConfig.order === 'asc' ? 'desc' : 'asc';

		setSortConfig({ key, order });

		const sortedData = [...categories].sort((a, b) => {

			if (a[key] < b[key]) {
				return order === 'asc' ? -1 : 1;
			}

			if (a[key] > b[key]) {
				return order === 'asc' ? 1 : -1;
			}

			return 0;

		});

		setSortedCategories(sortedData);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle> Categorias </CardTitle>
				<CardDescription> Administra las categorias de la plataforma </CardDescription>
			</CardHeader>
			<CardContent>
				<table className="table-fixed text-center w-full">
					<thead className="border-b-primary border-b relative text-sm lg:text-base">
						<tr className="h-16">
							<td>
								<button onClick={() => handleSort('id')} className='flex-center gap-2 mx-auto active:bg-accent hover:bg-hover p-2 rounded'>
									<HiOutlineArrowsUpDown />
									Id
								</button>
							</td>
							<td>
								Imagen
							</td>
							<td>
								<button onClick={() => handleSort('name')} className='flex-center gap-2 mx-auto active:bg-accent hover:bg-hover p-2 rounded'>
									<HiOutlineArrowsUpDown />
									Nombre
								</button>
							</td>
							<td className="max-sm:hidden">
								Estado
							</td>
							<td className="max-lg:hidden">
								Creado
							</td>
							<td className="max-lg:hidden">
								Modificado
							</td>
							<td className="">

							</td>
						</tr>
					</thead>
					<tbody className="text-xs sm:text-sm relative">
						{sortedCategories.map((category, index) => (
							<tr key={index} className="hover:bg-muted/50 duration-200 relative h-28">
								<td className="rounded-l-lg">
									{category.id}
								</td>
								<td>
									<CustomImage src="/images/Laptop.webp" alt="" height={96} width={96} className="mx-auto" />
								</td>
								<td>
									{category.name}
								</td>
								<td className=
									{`max-sm:hidden text-shadow-lg ${category.status === 1 ? 'text-green-500 shadow-green-500/50' : 'text-red-500 shadow-red-500/50'
										}`}
								>
									{category.status === 1 ? 'Activo' : 'Inactivo'}
								</td>
								<td className="max-lg:hidden">
									27-06-2024
								</td>
								<td className="max-lg:hidden">
									27-06-2024
								</td>
								<td className="rounded-r-lg space-x-2">
									<Popover>
										<PopoverTrigger className="p-2 rounded bg-transparent hover:shadow-lg hover:shadow-secondary/50 hover:bg-background duration-200">
											<MdOutlineUnfoldMore size={20} />
										</PopoverTrigger>
										<PopoverContent align="end" className="flex flex-col items-start text-sm w-auto " sideOffset={6}>
											{/* <Link href={`/admin/products/${product.id}`} className="flex items-center gap-2 hover:bg-secondary p-2 w-full rounded-sm ">
												<AiOutlineInfoCircle size={18} /> Información
											</Link> */}
											<Link href={`/admin/products/edit/${category.id}`} className="flex items-center gap-2 hover:bg-accent w-full rounded-sm px-3 py-2">
												<FiEdit size={18} /> Editar
											</Link>
											<button className="flex items-center gap-2 hover:bg-accent rounded-sm w-full px-3 py-2">
												<RiDeleteBin6Line size={18} /> Eliminar
											</button>
										</PopoverContent>
									</Popover>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</CardContent>
			<CardFooter>
				<Suspense>
					<Pagination totalPages={11} />
				</Suspense>
			</CardFooter>
		</Card>
	);
}