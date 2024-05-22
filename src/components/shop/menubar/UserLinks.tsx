
import { LuUser } from "react-icons/lu";
import {LinkTransition} from "@/components/ui";

export default function UserLinks() {
    return (
        <div className="group h-full flex justify-center items-center ">
        <LuUser className="group-hover:text-aorus group-hover:scale-110 transform duration-300 h-8 w-8"/>
        <div className="border w-auto -mr-[100%] h-auto bg-black fixed top-[60px] right-0 group-hover:mr-0 duration-300 flex flex-col">
            <LinkTransition href={"/auth/login"} className=" text-base w-full py-2 px-4 flex-center hover:bg-aorus hover:text-black transform duration-300">Iniciar Sesión</LinkTransition>
            <LinkTransition href={"/auth/new-account"} className=" text-base w-full py-2 px-4 flex-center hover:bg-aorus hover:text-black transform duration-300">Registrarse</LinkTransition>
        </div>
      </div>
    ) ;
}