'use client'
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { brands } from "@/app/data/data";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function ToogleBrand() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
  
  
    function handleBrand( term : string ) {
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set('brand', term);
        params.set('page', '1');
      } else {
        params.delete('brand');
        params.set('page', '1');
      }
      replace(`${pathname}?${params.toString()}`,{ scroll: false });
    }

    return (
        <Select onValueChange={handleBrand}  defaultValue={searchParams.get('brand') ? searchParams.get('brand')?.toString() : undefined}>
            <SelectTrigger className=" lg:max-w-[500px] w-full outline-none h-12 border text-base  rounded-none duration-300 hover:bg-neutral-950  hover:border-aorus focus:ring-0 focus:ring-offset-0 ">
                <span>Marca: </span>
                <SelectValue placeholder="Todas"/>
            </SelectTrigger>
            <SelectContent className="bg-black " position="popper" sideOffset={10} hideWhenDetached>
              <SelectItem  className="hover:bg-aorus duration-300 cursor-pointer" value="Todas">Todas</SelectItem>
              {brands.map((brand,index)=>(
                <SelectItem key={index} className="hover:bg-aorus duration-300 cursor-pointer" value={brand.name}>{brand.name}</SelectItem>
              ))}

            </SelectContent>
        </Select>
    );
  }