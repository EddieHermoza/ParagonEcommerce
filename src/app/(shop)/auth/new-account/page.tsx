import Link from "next/link";
import LinkTransition from "@/components/ui/LinkTransition";

export default function Page() {
  return (
    <section className="max-w-[425px] w-full h-auto bg-black/90 m-auto space-y-3 relative py-4">
      <h2 className="max-sm:text-3xl text-4xl m-auto p-3 w-full text-center">Registrate</h2>
      <form action="" method="post" className="flex flex-col gap-7 relative px-5 max-sm:text-sm">
        <div className="flex w-full gap-5 flex-col">
          <label htmlFor="flex flex-col gap-2">
            <span className=""> Nombres: </span>
            <input type="text" name="" id="" className="outline-none h-[40px] bg-black border focus:border-aorus duration-300 p-2 w-full" />
          </label>
          <label htmlFor="flex flex-col gap-2">
            <span className=""> Apellidos: </span>
            <input type="text" name="" id="" className="outline-none h-[40px] bg-black border focus:border-aorus duration-300 p-2 w-full" />
          </label>
        </div>

        <label htmlFor="flex flex-col gap-2">
          <span className=""> Correo Electrónico </span>
          <input type="email" name="" id="" className="outline-none h-[40px] bg-black border focus:border-aorus  duration-300 p-2 w-full" />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <span className=""> Contraseña </span>
          <input type="password" name="" id="" className="outline-none h-[40px] bg-black border focus:border-aorus transform duration-300 p-2 w-full"/>
        </label>
        <button className=" w-full btn-primary text-lg sm:text-2xl py-2">Registrarse</button>
      </form>
      <div className="flex flex-col gap-3 relative px-5">
        <span className="text-lg mx-auto">o</span>
        <LinkTransition href={"/auth/login"} className="flex-center w-full btn-secondary text-lg sm:text-2xl py-2">Iniciar Sesión</LinkTransition>
      </div>
    </section>
  );
}
