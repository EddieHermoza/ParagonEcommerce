
import { Checkbox } from "@/components/ui/checkbox";
import { Brand } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

type Props={
    brands:Brand[]
}

export default function FilterBrandsDetails({brands}:Props) {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()


    const selectedBrands = searchParams.get('brands')?.split(',') || []


    function handleBrandChange(brand: string) {

        const currentBrands = new Set(selectedBrands)

        if (currentBrands.has(brand)) {

            currentBrands.delete(brand)

        } else {
            
            currentBrands.add(brand)

        }

        const updatedBrands = Array.from(currentBrands).join(',')

        const params = new URLSearchParams(searchParams)

        if (updatedBrands) {

            params.set('brands', updatedBrands)

        } else {

            params.delete('brands')

        }

        params.set('page', '1')

        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
    
    return (
        <details className="w-full relative group">
            <summary className="flex items-center justify-between w-full p-2 bg-hover cursor-pointer list-none hover:text-primary duration-200 group-open:bg-muted">
                MARCAS
                <HiOutlinePlus className="group-open:hidden" />
                <HiOutlineMinus className="hidden group-open:block" />
            </summary>
            <div className="flex flex-col text-sm p-2">
                {brands.map((brand, index) => (
                    <label
                        key={index}
                        htmlFor={brand.slug}
                        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                    >
                        <Checkbox 
                            id={brand.slug} 
                            checked={selectedBrands.includes(brand.slug)}
                            onCheckedChange={ () => handleBrandChange(brand.slug)}/>
                        {brand.name}
                    </label>
                ))}
            </div>

        </details>
    );
}