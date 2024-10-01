"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui";
import { RiRestartLine } from "react-icons/ri";

export default function ResetFilters() {
    const pathname = usePathname()
    const { replace } = useRouter()

    function resetFilters() {
        replace(`${pathname}`, { scroll: false })
    }

    return (
        <Button size={"icon"} variant={"outline"} onClick={resetFilters} >
            <RiRestartLine size={18} />
        </Button>
    );
}