"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

export default function FilterOrderDetails() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const currentOrder = searchParams.get('order')

    function handleOrderChange(order: string) {
        const params = new URLSearchParams(searchParams)
        
        if (currentOrder === order) {
            params.delete('order')
        } else {
            params.set('order', order)
        }
        
        params.set('page', '1')
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <details className="w-full relative group">
            <summary className="flex items-center justify-between w-full p-2 bg-hover cursor-pointer list-none hover:text-primary duration-200 group-open:bg-muted">
                ORDEN
                <HiOutlinePlus className="group-open:hidden" />
                <HiOutlineMinus className="hidden group-open:block" />
            </summary>
            <div className="flex flex-col text-sm p-2">
                <label
                    htmlFor="desc"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                >
                    <Checkbox
                        id="desc"
                        checked={currentOrder === "desc"} 
                        onCheckedChange={() => handleOrderChange("desc")} 
                    />
                    Precio Descendente
                </label>
                <label
                    htmlFor="asc"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                >
                    <Checkbox
                        id="asc"
                        checked={currentOrder === "asc"}
                        onCheckedChange={() => handleOrderChange("asc")}
                    />
                    Precio Ascendente
                </label>
                <label
                    htmlFor="az"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                >
                    <Checkbox
                        id="az"
                        checked={currentOrder === "az"}
                        onCheckedChange={() => handleOrderChange("az")}
                    />
                    A a la Z
                </label>
                <label
                    htmlFor="za"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                >
                    <Checkbox
                        id="za"
                        checked={currentOrder === "za"}
                        onCheckedChange={() => handleOrderChange("za")}
                    />
                    Z a la A
                </label>
            </div>
        </details>
    );
}
