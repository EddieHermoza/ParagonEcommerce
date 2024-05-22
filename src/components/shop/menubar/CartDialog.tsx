"use client"
import { useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
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

const cartIcon = (
  <PiShoppingCartSimple className="h-8 w-8 transform duration-300 hover:text-aorus hover:scale-110 cursor-pointer" />
);

const dialogContent = (
  <DialogContent className="sm:max-w-[768px] bg-black border-aorus">
    <DialogHeader>
      <DialogTitle>Carrito de Compras</DialogTitle>
    </DialogHeader>
    <div className="w-full h-96">

    </div>
  </DialogContent>
);

const drawerContent = (
  <DrawerContent className="bg-black rounded-t-lg border-t-aorus border-t">
    <DrawerHeader className="text-center">

      <DrawerTitle>Carrito de Compras</DrawerTitle>
    </DrawerHeader>
    <div className="w-full h-96">

    </div>
  </DrawerContent>
);

export function CartDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const toggleDialog = () => setOpen(!open);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger onClick={toggleDialog}>
          {cartIcon}
        </DialogTrigger>
        {dialogContent}
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger onClick={toggleDialog}>
        {cartIcon}
      </DrawerTrigger>
      {drawerContent}
    </Drawer>
  );
}