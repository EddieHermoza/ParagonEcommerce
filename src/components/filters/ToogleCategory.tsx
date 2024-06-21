'use client'
import { useSearchParams,useRouter,usePathname } from "next/navigation";
import { categories } from "@/app/data/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ToogleCategory() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleCategory( term : string ) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('category', term);
      params.set('page', '1');
    } else {
      params.delete('category');
      params.set('page', '1');
    }
    replace(`${pathname}?${params.toString()}`,{ scroll: false });
  }
    return (
      <Select onValueChange={handleCategory}  defaultValue={searchParams.get('category') ? searchParams.get('category')?.toString() : undefined}>
        <SelectTrigger className=" lg:max-w-[500px] w-full outline-none h-12 border text-base  rounded-none hover:bg-neutral-950 duration-300 hover:border-aorus focus:ring-0 focus:ring-offset-0 ">
          <span>Categoria: </span>
          <SelectValue placeholder="Todas" />
        </SelectTrigger>
        <SelectContent className="bg-black " position="popper" sideOffset={10} hideWhenDetached>
          <SelectItem className="hover:bg-aorus duration-300 cursor-pointer" value="Todas">Todas</SelectItem>
          {categories.map((category,index)=>(
            <SelectItem key={index} className="hover:bg-aorus duration-300 cursor-pointer" value={category.name}>{category.name}</SelectItem>
          ))}

        </SelectContent>
      </Select>
    );
  }