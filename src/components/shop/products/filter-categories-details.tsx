"use client"
import { Checkbox } from "@/components/ui/checkbox";
import { Category } from "@/types/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

type Props = {
    categories: Category[]
}

export default function FilterCategoriesDetails({ categories }: Props) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()


    const selectedCategories = searchParams.get('categories')?.split(',') || []


    function handleCategoryChange(category: string) {
        
        const currentCategories = new Set(selectedCategories)

        if (currentCategories.has(category)) {

            currentCategories.delete(category)

        } else {

            currentCategories.add(category)
        }

        const updatedCategories = Array.from(currentCategories).join(',')

        const params = new URLSearchParams(searchParams)

        if (updatedCategories) {

            params.set('categories', updatedCategories)

        } else {

            params.delete('categories')

        }
        params.set('page', '1')

        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <details className="w-full relative group">
            <summary className="flex items-center justify-between w-full p-2 bg-hover cursor-pointer list-none hover:text-primary duration-200 group-open:bg-muted">
                CATEGORÍAS
                <HiOutlinePlus className="group-open:hidden" />
                <HiOutlineMinus className="hidden group-open:block" />
            </summary>
            <div className="flex flex-col text-sm p-2">
                {categories.map((category,index) => (
                    <label
                        key={index}
                        htmlFor={category.slug}
                        className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-3 items-center cursor-pointer hover:text-primary h-10"
                    >
                        <Checkbox
                            id={category.slug}
                            checked={selectedCategories.includes(category.slug)}
                            onCheckedChange={() => handleCategoryChange(category.slug)} 
                        />
                        {category.name}
                    </label>
                ))}
            </div>
        </details>
    );
}