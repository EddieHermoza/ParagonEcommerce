"use client"
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { SearchByName, PriceSelector } from "@/components/filters";
import { MdFilterList } from "react-icons/md";
import { Button, SheetClose, SheetTrigger } from "@/components/ui";
import { RiRestartLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui";
import FilterBrandsDetails from "./filter-brands-details";
import FilterCategoriesDetails from "./filter-categories-details";
import FilterOrderDetails from "./filter-order-details";
import { brands, categories } from "@/app/data/data";
import ResetFilters from "../filters/reset-filters";
import { useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
    children: React.ReactNode
}

export default function FilterProductsContainer({ children }: Props) {
    const pathname = usePathname()

    const links = [

    ]
    const IS_XL_SCREEN = useMediaQuery("(min-width: 1280px)")
    return (
        <>
            <div className="flex w-full">
                {
                    IS_XL_SCREEN && (
                        <aside className="w-full max-w-80 min-h-[calc(100vh-130px)] px-2 relative flex flex-col gap-10 max-xl:hidden">
                            <div className="w-full flex items-center justify-between">
                                <legend className="text-lg flex-center gap-2"><MdFilterList className="h-8 w-8 text-primary" /> FILTRAR</legend>
                                <ResetFilters />
                            </div>
                            <PriceSelector />
                            <FilterOrderDetails />
                            {
                                pathname.startsWith("/brands") && (
                                    <FilterCategoriesDetails categories={categories} />

                                )
                            }

                            {
                                pathname.startsWith("/categories") && (

                                    <FilterBrandsDetails brands={brands} />
                                )
                            }
                            {
                                pathname.startsWith("/products") && (
                                    <>
                                        <FilterCategoriesDetails categories={categories} />
                                        <FilterBrandsDetails brands={brands} />

                                    </>
                                )
                            }
                        </aside>
                    )
                }
                <div className="relative flex flex-col gap-5 sm:px-2 w-full">
                    <div className="relative w-full flex flex-col gap-5 sm:max-w-96 max-sm:px-2">
                        {
                            !IS_XL_SCREEN && (
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant={"outline"} size={"icon"} className="p-2">
                                            <MdFilterList size={25} />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side={"left"} className="w-screen " enableCloseButton>
                                        <SheetHeader>
                                            <SheetTitle className="text-2xl">
                                                FILTROS
                                            </SheetTitle>
                                        </SheetHeader>
                                        <div className="flex flex-col gap-10 w-full relative p-4 overflow-y-auto h-[calc(100vh-130px)] scrollbar-thin scrollbar-track-background scrollbar-thumb-primary">
                                            <PriceSelector />
                                            <FilterOrderDetails />
                                            {
                                                pathname.startsWith("/brands") && (
                                                    <FilterCategoriesDetails categories={categories} />

                                                )
                                            }

                                            {
                                                pathname.startsWith("/categories") && (

                                                    <FilterBrandsDetails brands={brands} />
                                                )
                                            }
                                            {
                                                pathname.startsWith("/products") && (
                                                    <>
                                                        <FilterCategoriesDetails categories={categories} />
                                                        <FilterBrandsDetails brands={brands} />

                                                    </>
                                                )
                                            }
                                            
                                            <div className="flex-center gap-2 w-full">
                                                <SheetClose asChild>
                                                    <Button className="sm:text-lg">
                                                        Aplicar Filtros
                                                    </Button>
                                                </SheetClose>
                                            </div>
                                        </div>

                                    </SheetContent>
                                </Sheet>
                            )
                        }

                        <SearchByName />
                    </div>


                    {children}
                </div>
            </div>
        </>

    );
}