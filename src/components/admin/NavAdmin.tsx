"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function NavAdmin() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleSetActiveLink = (link: string) => {
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
    <nav className="h-full flex  py-4 px-2 max-xl:hidden">
      <ul className="w-full text-white flex flex-col gap-3 items-center text-sm overflow-y-auto">
        <TooltipProvider delayDuration={0}>
          {dashboardLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index} className="w-full relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      onClick={() => handleSetActiveLink(link.href)}
                      className={`w-full rounded h-full flex-center duration-300 tracking-wide p-4 gap-2 ${
                        activeLink === link.href
                          ? "bg-aorus shadow-lg shadow-aorus/50"
                          : "active:bg-pressed hover:bg-neutral-900"
                      }`}
                    >
                      <Icon size={30} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-black border-neutral-800 text-white text-lg">
                    <p >{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </TooltipProvider>
      </ul>
    </nav>
  );
}