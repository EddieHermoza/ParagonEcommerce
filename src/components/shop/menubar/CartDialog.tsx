"use client"
import { CiTrash } from "react-icons/ci";
import { titilium } from "@/app/config/font";
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import Link from "next/link";
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
import { CustomImage } from "@/components/ui";

const cartIcon = (
  <PiShoppingCartSimple className="w-8 h-8 duration-300 transform cursor-pointer hover:text-aorus hover:scale-110" />
);

const Content= ({ click }: any) => {
  return (
    <>
      <div className="relative w-full overflow-y-auto h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-aorus">
  
        <div className="relative flex justify-between w-full pr-5">
          <div className="flex gap-3">
            <CustomImage src="../images/Laptop.webp" height={100} width={100} alt=""/>
            <div className="flex flex-col justify-center">
              <span className="sm:text-xl max-w-[200px] sm:max-w-[400px] truncate">Corsair K95 RGB Platinum XT</span>
              <span className="max-sm:text-xs"> 3 <span className={`${titilium.className}`}> x </span> $/4000 </span>
              <span className="text-aorus sm:text-xl"> $/ 12000</span>
            </div>
          </div>
          <button className="w-10 h-10 my-auto duration-300 hover:text-aorus hover:scale-110">
            <CiTrash size={30}/>
          </button>
        </div>
  
  
      </div>
      <div className="flex flex-col items-center justify-between gap-3 px-5 mt-4 text-xl">
          <span>Total: $/100000</span>
          <Link href={"/cart"} onClick={() => { click() }} className="w-full py-2 text-center btn-secondary"> Ver carrito</Link>
          <Link href={"/checkout"} onClick={() => { click() }} className="w-full py-2 text-center btn-primary"> Ir a Pagar </Link>
      </div>
    </>
  
  );
}



const dialogContent = ({ click }: any) => {
  return (
    <DialogContent className="sm:max-w-[768px] bg-black border-aorus ">
      <DialogHeader>
        <DialogTitle>Tus Productos</DialogTitle>
      </DialogHeader>
      <div className="w-full h-[550px] relative flex flex-col justify-between">
        {Content(click)}
      </div>
    </DialogContent>
  );
};

const drawerContent = ({ click }: any) => {
  return (
    <DrawerContent className="bg-black border-t rounded-t-lg border-t-aorus">
      <DrawerHeader className="text-center">
        <DrawerTitle>Tus Productos</DrawerTitle>
      </DrawerHeader>
      <div className="w-full h-[550px] relative flex flex-col justify-start  ">
        {Content(click)}
      </div>
    </DrawerContent>
  );
};

export function CartDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const toggleDialog = () => setOpen(!open);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={toggleDialog}>{cartIcon}</DialogTrigger>
        {dialogContent({ click: toggleDialog })}
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger onClick={toggleDialog}>{cartIcon}</DrawerTrigger>
      {drawerContent({ click: toggleDialog })}
    </Drawer>
  );
}