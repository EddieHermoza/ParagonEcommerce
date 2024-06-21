"use client"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import {AiOutlineSearch} from "react-icons/ai"

export default function SearchByName() {
    const searchParams=useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term:string) {
        const params = new URLSearchParams(searchParams);
            if (term) {
                params.set('query', term);
                params.set('page', '1');
            } else {
                params.delete('query');
                params.set('page', '1');
            }
        replace(`${pathname}?${params.toString()}`,{ scroll: false });
      }
    const debouncedHandleSearch=useDebouncedCallback(handleSearch,500)

    return (
            <label htmlFor="" className='flex items-center flex-row-reverse lg:max-w-[500px] w-full h-0 relative '>

            <input 
                type="text"
                className="outline-none h-12 w-full  text-base p-2 border-b bg-transparent focus:border-aorus duration-300 peer"
                placeholder="Busqueda"
                onChange={(e)=>{debouncedHandleSearch(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
            />

            <div className="h-12 border-b peer-focus:border-aorus duration-300 flex-center">
                <AiOutlineSearch  size={30}/>
            </div>
        </label>
    );
}