'use client'
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ToogleOrder() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleOrder( term : string ) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('order', term);
      params.set('page', '1');
    } else {
      params.delete('order');
      params.set('page', '1');
    }
    replace(`${pathname}?${params.toString()}`,{ scroll: false });
  }
  return (
    <Select onValueChange={handleOrder}  defaultValue={searchParams.get('order') ? searchParams.get('order')?.toString() : undefined}>
      <SelectTrigger className=" lg:max-w-[500px] w-full outline-none h-12 border text-base rounded-none  duration-300 hover:bg-neutral-950  hover:border-aorus focus:ring-0 focus:ring-offset-0 ">
            <span>Ordernar Por: </span>
            <SelectValue placeholder="Seleccionar"/>
      </SelectTrigger>
      <SelectContent className="bg-black" position="popper" sideOffset={10} hideWhenDetached>
        <SelectItem className="hover:bg-aorus duration-300 cursor-pointer" value="asc">Precio ascendente</SelectItem>
        <SelectItem className="hover:bg-aorus duration-300 cursor-pointer" value="desc">Precio descendente</SelectItem>
        <SelectItem className="hover:bg-aorus duration-300 cursor-pointer" value="AZ">A a la Z</SelectItem>
        <SelectItem className="hover:bg-aorus duration-300 cursor-pointer" value="ZA">Z a la A</SelectItem>
      </SelectContent>
    </Select>
  );
}