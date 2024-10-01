import { Suspense } from "react";
import ProductCard from "./product-card";
import { products } from "@/app/data/data";
import { Pagination } from "@/components/ui";


export default function ProductGrid() {

    return (
        <>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row relative w-full">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                    />
                ))}
            </div>
            {/* <div className="w-full flex-center py-5">
                <Suspense>
                    <Pagination totalPages={11} />
                </Suspense>
            </div> */}
        </>
    );
}