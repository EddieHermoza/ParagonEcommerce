'use client'
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ToogleStockStatus() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleOrder( term : string ) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('stock', term);
      params.set('page', '1');
    } else {
      params.delete('stock');
      params.set('page', '1');
    }
    replace(`${pathname}?${params.toString()}`,{ scroll: false });
  }
  return (
    <Select onValueChange={handleOrder}  defaultValue={searchParams.get('order') ? searchParams.get('order')?.toString() : undefined}>
      <SelectTrigger className=" lg:max-w-[500px] w-full h-12 ">
            <span>Cantidad de Stock: </span>
            <SelectValue placeholder="Todos"/>
      </SelectTrigger>
      <SelectContent className="bg-black" position="popper" sideOffset={10} hideWhenDetached>
        <SelectItem value="all">Todos</SelectItem>
        <SelectItem value="low"> Bajo</SelectItem>
        <SelectItem value="medium"> Medio</SelectItem>
        <SelectItem value="hight"> Alto</SelectItem>
      </SelectContent>
    </Select>
  );
}