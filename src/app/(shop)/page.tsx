
import {HeroCarousel} from "@/components/shop"
import {CategoriesCarousel} from "@/components/shop";
import {Footer} from "@/components/shop";
import {ExploreSection} from "@/components/shop";
import {ContactSection} from "@/components/shop";
import {MembresySection} from "@/components/shop";
import {Title} from "@/components/ui";


export default function Home() {
  return (
    <>
      <main>
        <section className="w-full relative filter saturate-200">
          <HeroCarousel/>
        </section>
        
        <section className="w-full relative ">
          <Title 
            title="DESCUBRE MÁS" 
            sub="AORUS es una empresa líder en tarjetas madre, tarjetas gráficas, laptops, hardware de juegos y sistemas de alto rendimiento. ¡Nos apasiona unirnos a los jugadores para desafiar los límites sin miedo y luchar mientras nos elevamos a la gloria máxima!"
          />

          <CategoriesCarousel/>
        </section>

        <ExploreSection/>

        <MembresySection/>

        <ContactSection/>
      </main>
      <Footer/>
    </>

  );
}
