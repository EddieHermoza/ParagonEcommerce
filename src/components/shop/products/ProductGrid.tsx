import ProductCard from "./ProductCard";
import { products } from "@/app/data/data";


export default function ProductGrid() {

    return (
        <div className=" w-full h-full grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row relative gap-8 max-w-[1500px]">
            {products.map((product,index) => (
                <ProductCard
                    key={index}
                    tittle={product.name}
                    price={product.precio}
                    img={product.imgs[0]}
                    url={`/product/${product.slug}`}
                />
            ))}
        </div>
    );
}