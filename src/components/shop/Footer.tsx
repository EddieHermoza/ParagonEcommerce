import { titilium } from "@/app/config/font";
export default function Footer() {
  return (
    <footer className="h-[70px] flex items-center justify-center max-sm:text-xs sm:text-base text-center w-full px-3 bg-secondary">
        <p className={titilium.className}> © 2024 © Paragon.  Todos los derechos reservados. </p>
    </footer>
  );
}