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
            <SelectTrigger className=" lg:max-w-[500px] w-full h-12 ">
                <span>Marca: </span>
                <SelectValue placeholder="Todas"/>
            </SelectTrigger>
            <SelectContent  position="popper" sideOffset={10} hideWhenDetached>
              <SelectItem   value="Todas">Todas</SelectItem>
              {brands.map((brand,index)=>(
                <SelectItem key={index}  value={brand.name}>{brand.name}</SelectItem>
              ))}

            </SelectContent>
        </Select>
    );
  }