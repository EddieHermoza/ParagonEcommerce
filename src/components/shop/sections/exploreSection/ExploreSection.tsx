
import ExploreCard from "./ExploreCard";
import {Title} from "@/components/ui";

export default function ExploreSection() {
  return (
    <section className="flex justify-center ">
        <div className="flex flex-col justify-center">
            <div className="relative flex flex-col items-center justify-center text-center pb-5">
                <Title 
                    title="EXPLORA" 
                    sub="Nuestra excelencia como tienda se refleja en lo que le ofrecemos a los clientes."
                />
            </div>
            <div className="grid grid-rows-6 gap-2 md:grid-rows-4 h-[1400px] max-w-[1400px] w-full">
                <div className="row-span-3 gap-2 md:row-span-2 grid grid-rows-3 md:grid-rows-none md:grid-cols-4 ">
                    <div className="col-span-3 gap-2 md:col-span-2 grid row-span-2 md:row-span-3 md:grid-rows-2">
                        <ExploreCard 
                            title="Todos los Productos"
                            description="Visualiza todos nuestros productos disponibles"
                            url="/products"
                            img="/images/Ofertas.webp"
                        />
                       <ExploreCard 
                            title="Lo Más Vendido"
                            description="Productos que, sorprendentemente, otros clientes también están comprando."
                            url="/top-sellers"
                            img="/images/MasVendido.webp"
                        />
                    </div>
                    <div className="col-span-3 md:col-span-2 row-span-3">
                        <ExploreCard 
                            title="Ultimas Adquisiciones"
                            description="Donde mostramos lo último... hasta que llegue algo nuevo y mejor"
                            url="/new-products"
                            img="/images/NuevasAdquisiciones.webp"
                        />
                    </div>
                </div>
                <div className=" row-span-2 md:row-span-1 gap-2 grid grid-rows-2 md:grid-rows-none grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1">
                        <ExploreCard 
                            title="¿Quienes Somos?"
                            description="Descubre quienes estan detras de Paragon"
                            url="/about"
                            img="/images/QuienesSomos.webp"
                        />
                    </div>
                    <div className="col-span-2">
                        <ExploreCard 
                            title="Reseñas y Comentarios"
                            description="Desde el exagerado hasta el crítico profesional, aquí encontrarás muchas opiniones"
                            url="/reviews"
                            img="/images/Reseñas-Coment.webp"
                        />
                    </div>
                </div>
                <ExploreCard 
                    title="Productos en Descuento"
                    description="Con descuentos tan bajos que te harán cuestionar la realidad."
                    url="/discounts"
                    img="/images/ProductosDescuentos.webp"
                    ViewTransitionName='explore-card-all5'
                />
            </div>
        </div>
    </section>
  );
}