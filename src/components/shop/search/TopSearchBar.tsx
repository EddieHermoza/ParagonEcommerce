'use client';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui"

import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./SearchBar";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";

export default function TopSearchBar() {

  const [Open,setOpen] = useState(false)

  const isDesktop = useMediaQuery("(min-width: 1024px)")

  function ToogleOpen() {
    setOpen(!Open)
  }

    if (isDesktop) {
      return(
        <Sheet open={Open} onOpenChange={ToogleOpen}>
          <SheetTrigger>
            <IoSearch className="h-8 w-8 transform duration-300 hover:text-aorus hover:scale-110"/>
          </SheetTrigger>
          <SheetContent className=" bg-black" side={"top"}>
            <div className="px-5 relative w-full pr-10 flex-center"> 
              <SearchBar/>           
            </div>
          </SheetContent>
      </Sheet>
      )
    }
}