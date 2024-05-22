
import { IoSearch } from "react-icons/io5";


export default function SearchBar() {
    return (
        <form className="flex items-center flex-row-reverse relative gap-2  w-full">
            <input type="text" placeholder="Buscar" className="outline-none bg-neutral-900 border focus:border-aorus focus:bg-black transform duration-300 p-2 text-base w-full" />
            <button >
                <IoSearch className="h-8 w-8 hover:text-aorus transform duration-300"/>
            </button>
        </form>
    );
}