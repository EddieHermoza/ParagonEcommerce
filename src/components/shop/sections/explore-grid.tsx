import Link from "next/link"
import Image from "next/image";
import { titilium } from "@/app/config/font";
import { LinkTransition } from "@/components/ui";

export default function ExploreGrid() {
    return (
        <>
            <div className="grid grid-rows-6 gap-2 md:grid-rows-4 h-[1400px] container max-lg:px-0">
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
                            title="Nuestras Marcas"
                            description="Explora las marcas que respaldan nuestros productos"
                            url="/brands"
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
                            title="Nuestras Categorias"
                            description="Navega por nuestras categorías y encuentra las mejores ofertas en una variedad de productos."
                            url="/categories"
                            img="/images/ProductosDescuentos.webp"
                            ViewTransitionName='explore-card-all5'
                        />
                    </div>
                </div>
                    <ExploreCard
                        title="Reseñas y Comentarios"
                        description="Desde el exagerado hasta el crítico profesional, aquí encontrarás muchas opiniones"
                        url="/reviews"
                        img="/images/Reseñas-Coment.webp"
                    />
            </div>
        </>
    );
}


type Props = {
    url: string,
    title: string,
    description: string
    img: string,
    ViewTransitionName?: string
}

function ExploreCard(props: Props) {
    return (
        <LinkTransition href={props.url} className="w-full h-full group rounded-md relative flex-center flex-col overflow-hidden space-y-3 duration-200 filter saturate-150">
            <h3 className="text-center max-md:text-2xl text-3xl z-10 text-shadow-lg shadow-black">{props.title}</h3>
            <p className={`${titilium.className} text-center max-lg:hidden max-md:text-base md:text-xl w-4/5 z-10 text-shadow-lg shadow-black`}>{props.description}</p>
            <Image height={1600} width={1080} className="absolute object-cover object-center group-hover:scale-105 duration-200 -z-10 w-full h-full" src={props.img} alt="" />
        </LinkTransition>
    );
}