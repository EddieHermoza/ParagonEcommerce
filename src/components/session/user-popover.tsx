'use client';
import Link from "next/link";
import CloseSessionButton from "./close-session-button";
import { PiUserCheckLight } from "react-icons/pi";
import { Button } from "../ui";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function UserPopover() {

    const isDesktop = useMediaQuery("(min-width: 1024px)")
	return (
		<>
            {
                isDesktop && (
                    <Popover>
                        <Button asChild variant={"outline"}>
                            <PopoverTrigger className="flex-center gap-2"> <PiUserCheckLight size={22} /> Usario Nombre</PopoverTrigger>     
                        </Button>
                        <PopoverContent sideOffset={10}  align="end" className="flex flex-col gap-1 items-start text-sm w-auto ">
                            {/* <Link href={"/"} className="flex items-center gap-2 hover:bg-secondary p-2 w-full rounded-lg ">
                            <AiOutlineInfoCircle size={18}/>
                            Información
                        </Link> */}
                            <CloseSessionButton iconSize={18} label="Cerrar Sesión" />
                        </PopoverContent>
                    </Popover>
                )
            }
		</>
	);
}