import { brands, categories } from "@/app/data/data";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import { Glitch } from "@/components/ui";
import SideMenuBar from "./SideMenuBar";
import { TopSearchBar } from "@/components/shop";
import { LinkTransition } from "@/components/ui";
import { CartButton } from "../cart/cart-ui";
import UserPopover from "@/components/session/user-popover";



export default function MenuBar() {
	return (
		<header className="w-screen sticky top-0 insets-0 flex justify-between items-center z-50 bg-background h-[60px]">
			<nav className="relative flex justify-start items-center h-full ">
				<Glitch tittle="Paragon" height={60} width={260} fontSize={40} />
				<ul className="relative h-full flex justify-start max-lg:hidden text-lg">

					<li className="group h-full flex-center px-3">
						<span className="flex-center gap-2 group-hover:text-primary cursor-pointer h-full text-sm" > MARCAS <FaChevronDown className="rotate-180 group-hover:rotate-0 duration-200" /> </span>
						<ul className="w-[100%] -ml-[100%] h-40 bg-background fixed top-[60px] left-0 group-hover:ml-0 duration-300 flex-wrap flex-center gap-x-7 border-b border-border">
							{brands.map((brand, index) => (
								<LinkTransition key={index} href={`/brands/${brand.slug}`} className=" duration-200 hover:text-primary underline underline-offset-4 hover:underline-offset-8"> {brand.name}</LinkTransition>
							))}
						</ul>
					</li>

					<li className="group h-full flex-center px-3">
						<span className="flex-center gap-2 group-hover:text-primary duration-200 cursor-pointer text-sm"> CATEGORIAS <FaChevronDown className="rotate-180 group-hover:rotate-0 duration-200" /> </span>
						<ul className="w-[100%] ml-[100%] h-40 bg-background fixed top-[60px] left-0 group-hover:ml-0 duration-300 flex-wrap flex-center gap-x-7 border-b border-border">
							{categories.map((category, index) => (
								<LinkTransition key={index} href={`/categories/${category.slug}`} className="duration-200 hover:text-primary underline underline-offset-4 hover:underline-offset-8"> {category.name}</LinkTransition>
							))}
						</ul>
					</li>

					<li className="h-full flex justify-center items-center pl-3">
						<Link href={"/about"} className="text-sm hover:text-primary duration-200">NOSOTROS</Link>
					</li>

				</ul>
			</nav>
			<div className="w-full h-full flex justify-end items-center gap-5 pr-5 relative">
				<CartButton />
				<div className="max-lg:hidden relative">
					<UserPopover/>
				</div>
				<div className="lg:hidden h-8">
					<SideMenuBar categories={categories} brands={brands} />
				</div>
			</div>
		</header>

	);
}