import { FaFacebookF,FaInstagram,FaWhatsapp,FaTiktok,FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { titilium } from "@/app/config/font";
import {Glitch} from "@/components/ui";


export default function ContactSection() {
  return (
    <section className="flex justify-center w-full py-[60px]">
        <div className="flex flex-col items-center justify-center w-full max-w-[1400px] gap-y-5">
            <Image height={200} width={200} alt="logo" src={"/images/Logo.webp"}></Image>
            <Glitch tittle="Paragon" height={60} width={260} fontSize={40}/>
            <div className="w-full text-center mb-5 flex flex-col gap-5">
                <p className={`${titilium.className} max-sm:text-xl sm:text-2xl text-gray-300 p-2`}>Donde la excelencia se convierte en tecnología</p>    
                <ul className="flex flex-wrap w-full items-center justify-center gap-5 text-3xl text-white p-4">
                    <li className="hover:text-aorus transform duration-300">
                        <FaFacebookF/>
                    </li>
                    <li className="hover:text-aorus transform duration-300">
                        <FaWhatsapp/>
                    </li>
                    <li className="hover:text-aorus transform duration-300">
                        <FaInstagram/>
                    </li>
                    <li className="hover:text-aorus transform duration-300">
                        <FaTiktok/>
                    </li>
                    <li className="hover:text-aorus transform duration-300">
                        <FaXTwitter/>
                    </li>
                </ul>
            </div>
            <div className="w-full grid gap-3 sm:gap-0 sm:grid-cols-2">
                <div className=" flex flex-col space-y-3 text-center">
                    <h2 className="text-4xl">Contáctanos</h2>
                    <p className={`${titilium.className} px-8 text-gray-300 max-sm:text-base sm:text-xl`}>¿Tienes alguna pregunta? Estamos aquí para ayudarte. En Paragon, damos la mejor atención y asesoramiento sobre nuestros productos</p>
                </div>
                <form action="" className=" space-y-6">
                    <div className="flex flex-col gap-1 px-6">
                        <label className="" >Nombre :</label>
                        <input className="outline-none p-4 border h-[50px] focus:border-aorus transform duration-300 bg-transparent " type="text"/>
                    </div>
                    <div className="flex flex-col gap-1 px-6">
                        <label className="" >Correo :</label>
                        <input className="outline-none p-4 border h-[50px] focus:border-aorus transform duration-300 bg-transparent " type="text"/>
                    </div>
                    <div className="flex flex-col gap-1 px-6">
                        <label className="" >Mensaje :</label>
                        <textarea className="outline-none p-4 border focus:border-aorus transform duration-300 bg-transparent" name="" id="" cols={30} rows={4}></textarea>
                    </div>
                    <div className="w-full flex justify-start px-6">
                        <button className="text-xl h-[50px] w-full border border-black rounded-corners bg-aorus hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 hover:text-black transform duration-300">Enviar Mensaje</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
}