import Link from "next/link";
import {LinkTransition} from "@/components/ui";
import { titilium } from "@/app/config/font";
export default function MembresySection() {
  return (
  <section className="mt-[60px]">
      <div className="flex flex-col gap-4 items-center justify-center h-[400px] bg-cover bg-no-repeat bg-fixed bg-center bg-[url('/images/ParagonBanner.webp')] filter saturate-150">
          <div className="absolute inset-0 w-full h-full bg-black/20 -z-10"></div>
          <h2 className="text-5xl text-center text-shadow-lg shadow-black">Únete</h2>
          <p className={`${titilium.className} text-center text-xl md:text-2xl lg:text-3xl px-4 sm:px-0 md:w-2/3 lg:w-1/2 text-shadow-lg shadow-black`}>Con la membresia Paragon acumularás puntos mediante compras para luego canjearlos por recompensas.</p>
          <div className="flex gap-4">
              <LinkTransition href={"../auth/new-account"} className="flex items-center w-auto h-10 px-4 text-xl btn-secondary">Regístrate</LinkTransition>
              <LinkTransition href={"../auth/login"} className="flex items-center w-auto h-10 px-4 text-xl btn-primary">Inicia Sesión</LinkTransition>
          </div>
      </div>
  </section>
  );
}