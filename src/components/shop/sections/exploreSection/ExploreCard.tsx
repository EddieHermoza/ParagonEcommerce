import Link from "next/link"
import Image from "next/image";
import { titilium } from "@/app/config/font";
import {LinkTransition} from "@/components/ui";

type Props = {
    url: string,
    title: string,
    description: string
    img:string,
    ViewTransitionName?:string
}

export default function ExploreCard(props: Props) {
  return (
    <LinkTransition href={props.url} className="w-full h-full group rounded-md relative flex-center flex-col overflow-hidden space-y-3 transform duration-300 filter saturate-150">
        <h3 className="text-center max-md:text-2xl text-3xl z-10 text-shadow-lg shadow-black">{props.title}</h3>
        <p className={`${titilium.className} text-center max-lg:hidden max-md:text-base md:text-xl w-4/5 z-10 text-shadow-lg shadow-black`}>{props.description}</p>
        <Image height={1600} width={1080} className="absolute object-cover object-center group-hover:scale-110 transform duration-300 -z-10 w-full h-full" src={props.img} alt=""/>
    </LinkTransition>
  );
}