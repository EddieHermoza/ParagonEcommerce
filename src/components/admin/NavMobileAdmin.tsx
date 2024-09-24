"use client"
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { usePathname } from 'next/navigation';
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoShieldHalfSharp } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { SiLogitechg } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { TiShoppingBag } from "react-icons/ti";
import Link from 'next/link';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
function NavMobileDashboard() {
    const pathname=usePathname()
    const [activeLink, setActiveLink] = useState(pathname);

    const handleSetActiveLink = (link:string) => {
        setActiveLink(link);
    };

    const dashboardLinks = [
        { label: "Dashboard", href: "/admin/dashboard", icon: MdDashboard },
        { label: "Productos", href: "/admin/products", icon: FaComputer },
        { label: "Clientes", href: "/admin/customers", icon: FiUsers },
        { label: "Inventario", href: "/admin/inventory", icon: MdOutlineInventory2 },
        { label: "Proveedores", href: "/admin/providers", icon: FaUsersGear },
        { label: "Marcas", href: "/admin/brands", icon: SiLogitechg }, 
        { label: "Categorias", href: "/admin/categories", icon: MdCategory }, 
        { label: "Comentarios", href: "/admin/reviews", icon: FaRegCommentDots }, 
        { label: "Administradores", href: "/admin/workers", icon: IoShieldHalfSharp }, 
        { label: "Ventas", href: "/admin/sales", icon: MdOutlinePayment }, 
        { label: "Compras", href: "/admin/expenses", icon: TiShoppingBag }, 
      ];
  
  return (
        <Sheet >
            <SheetTrigger className='duration-200 border hover:border-primary hover:text-primary bg-background fixed bottom-10 right-10 z-50 max-xl:flex-center xl:hidden p-3 rounded-full'>
                <CgMenuRight size={32} />
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-black border-none flex flex-col gap-5 items-center w-[300px]">
                <SheetHeader>
                    <SheetTitle className="text-2xl w-full ">Paragon</SheetTitle>
                </SheetHeader>
                <ul className="w-full flex flex-col gap-2">
                    {dashboardLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                        <li key={index} className="w-full relative">
                            <SheetClose asChild className='w-full relative flex'>
                                <Link
                                href={link.href}
                                onClick={() => handleSetActiveLink(link.href)}
                                className={`w-full rounded h-full duration-300 p-3 gap-1 text-sm ${
                                    activeLink === link.href
                                    ? "bg-aorus shadow-lg shadow-aorus/50"
                                    : "active:bg-pressed hover:bg-neutral-900"
                                }`}
                                >
                                <Icon size={20} />
                                {link.label}
                                </Link>
                            </SheetClose>
                        </li>
                        );
                    })}
                </ul>
            </SheetContent>
        </Sheet>
  )
}

export default NavMobileDashboard