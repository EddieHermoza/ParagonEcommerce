"use client";
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Slider } from "@/components/ui";

export default function PriceSelector() {
    const [maxPrice, setMaxPrice] = useState(10000)
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    useEffect(() => {
        const maxFromParams = searchParams.get('max')
        if (maxFromParams) {
            setMaxPrice(Number(maxFromParams))
        }
    }, [searchParams])

    function updateMaxPriceInURL(term: any) {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('max', term)
            params.set('page', '1')
        } else {
            params.delete('max')
            params.set('page', '1')
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const debouncedUpdateMaxPrice = useDebouncedCallback(updateMaxPriceInURL, 500)

    return (
        <div className="w-full relative flex flex-col items-start justify-between h-12">
            <span className="pb-2">Rango de Precio:</span>
            <div className='flex gap-5 items-center justify-between w-full'>
                <span>0</span>
                <Slider
                    min={0}
                    max={10000}
                    step={1}
                    onValueChange={(values) => setMaxPrice(values[0])} 
                    onValueCommit={(values) => debouncedUpdateMaxPrice(values[0].toString())} 
                    defaultValue={[10000]}
                    value={[maxPrice]} 
                />
                <span className='w-20'>{maxPrice}</span>
            </div>
        </div>
    );
}
