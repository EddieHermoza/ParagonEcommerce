import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button, LinkTransition } from "@/components/ui";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Page() {
    return (
        <section className="max-w-screen-sm w-full h-auto m-auto relative">
            <Card className="bg-background/90 rounded-none border-none">
                <CardHeader>
                    <CardTitle className="text-3xl m-auto">
                        Inicia Sesión
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center max-sm:gap-5 gap-10">
							<div className=" w-full flex justify-between max-sm:flex-col max-sm:gap-5 gap-3">

								<label htmlFor="name" className="flex flex-col gap-2 w-full">
									<span>Nombres:</span>
									<Input id="name" />
								</label>

								<label htmlFor="lastName" className="flex flex-col gap-2 w-full">
									<span>Apellidos:</span>
									<Input id="lastName" />
								</label>

							</div>

                            <label htmlFor="name" className="flex flex-col gap-2">
                                <span>Correo Electrónico</span>
                                <Input id="name" />
                            </label>

                            <label htmlFor="password" className="flex flex-col gap-2">
                                <span>Contraseña</span>
                                <Input id="password" type="password" />
                            </label>
                            
                            <div className="w-full flex-center flex-col gap-2 relative">
                                <Button asChild className="text-xl w-full">
                                    <Link href={"/admin/dashboard"}>Registrarse</Link>
                                </Button>
                                o
                                <Button asChild variant={"secondary"} className="text-xl w-full">
                                    <Link href={"/auth/new-account"}>Iniciar Sesión</Link>
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
