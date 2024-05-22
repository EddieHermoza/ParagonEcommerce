import Link from "next/link";
import {LinkTransition} from "@/components/ui";
import { titilium } from "@/app/config/font";
export default function MembresySection() {
  return (
  <section className="mt-[60px]">
      <div className="flex flex-col gap-4 items-center justify-center h-[400px] bg-cover bg-no-repeat bg-fixed bg-center bg-[url('/images/ParagonBanner.webp')] filter saturate-150">
          <div className="w-full h-full absolute inset-0 bg-black/20 -z-10"></div>
          <h2 className="text-center text-5xl text-shadow-lg shadow-black">Únete</h2>
          <p className={`${titilium.className} text-center text-xl md:text-2xl lg:text-3xl px-4 sm:px-0 md:w-2/3 lg:w-1/2 text-shadow-lg shadow-black`}>Con la membresia Paragon acumularás puntos mediante compras para luego canjearlos por recompensas.</p>
          <div className="flex gap-4">
              <LinkTransition href={"../auth/new-account"} className="rounded-corners flex items-center border-2 hover:bg-white hover:text-black text-xl h-10 w-auto px-4  duration-300">Regístrate</LinkTransition>
              <LinkTransition href={"../auth/login"} className="rounded-corners flex items-center text-xl bg-aorus hover:bg-cyan-400 hover:text-black h-10 w-auto px-4  duration-300">Inicia Sesión</LinkTransition>
          </div>
      </div>
  </section>
  );
}