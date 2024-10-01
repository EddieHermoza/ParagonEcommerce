import { FaFacebookF,FaInstagram,FaWhatsapp,FaTiktok,FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { titilium } from "@/app/config/font";
import {Button, Glitch} from "@/components/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function ContactForm() {
  return (
    <>
        <div className="flex-center flex-col container gap-5">
            <Image height={200} width={200} alt="logo" src={"/images/Logo.webp"}></Image>
            <Glitch tittle="Paragon" height={60} width={260} fontSize={40}/>
            <div className="flex flex-col w-full gap-5 mb-5 text-center">
                <p className={`${titilium.className} max-sm:text-xl sm:text-2xl text-muted-foreground p-2`}>Donde la excelencia se convierte en tecnología</p>    
                <ul className="flex flex-wrap items-center justify-center w-full gap-10 p-4 text-3xl text-white">
                    <li className="duration-200 hover:text-primary">
                        <FaFacebookF/>
                    </li>
                    <li className="duration-200  hover:text-primary">
                        <FaWhatsapp/>
                    </li>
                    <li className="duration-200  hover:text-primary">
                        <FaInstagram/>
                    </li>
                    <li className="duration-200  hover:text-primary">
                        <FaTiktok/>
                    </li>
                    <li className="duration-200  hover:text-primary">
                        <FaXTwitter/>
                    </li>
                </ul>
            </div>
            <div className="grid w-full gap-3 sm:gap-0 lg:grid-cols-2">
                <div className="flex flex-col gap-3 text-center ">
                    <h2 className="text-4xl">Contáctanos</h2>
                    <p className={`${titilium.className} px-8 text-muted-foreground max-sm:text-base sm:text-xl`}>¿Tienes alguna pregunta? Estamos aquí para ayudarte. En Paragon, damos la mejor atención y asesoramiento sobre nuestros productos</p>
                </div>
                <form>
                    <div className="grid w-full items-center gap-10">
                        <label htmlFor="name" className="flex flex-col gap-2">
                            <span>Nombre:</span>
                            <Input id="name" />
                         </label>
                         <label htmlFor="email" className="flex flex-col gap-2">
                            <span>Correo Electrónico:</span>
                            <Input id="email" />
                         </label>
                         <label htmlFor="message" className="flex flex-col gap-2">
                            <span>Mensaje:</span>
                            <Textarea id="message" className="min-h-40"/>
                         </label>
                        <Button className="text-xl">
                            Enviar Mensaje
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}