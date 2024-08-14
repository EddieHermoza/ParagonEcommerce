'use client'
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ToogleStatus() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleOrder( term : string ) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('status', term);
      params.set('page', '1');
    } else {
      params.delete('status');
      params.set('page', '1');
    }
    replace(`${pathname}?${params.toString()}`,{ scroll: false });
  }
  return (
    <Select onValueChange={handleOrder}  defaultValue={searchParams.get('order') ? searchParams.get('order')?.toString() : undefined}>
      <SelectTrigger className=" lg:max-w-[500px] w-full h-12 ">
            <span>Estado: </span>
            <SelectValue placeholder="Todos"/>
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={10} hideWhenDetached>
        <SelectItem value="dis">Todos</SelectItem>
        <SelectItem value="en">Activo</SelectItem>
        <SelectItem value="dis">Inactivo</SelectItem>
      </SelectContent>
    </Select>
  );
}