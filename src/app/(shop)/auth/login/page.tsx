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
        <section className="max-w-[425px] w-full h-auto m-auto relative">
            <Card className="bg-background/90">
                <CardHeader>
                    <CardTitle className="text-3xl m-auto rounded-none border-none">
                        Inicia Sesión
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-10">

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
                                    <Link href={"/admin/dashboard"}>Iniciar Sesión</Link>
                                </Button>
                                o
                                <Button asChild variant={"secondary"} className="text-xl w-full">
                                    <Link href={"/auth/new-account"}>Registrarse</Link>
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
