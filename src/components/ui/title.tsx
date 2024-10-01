import { titilium } from "@/app/config/font";

type Props = {
	title: string | undefined,
	sub?: string,
}

export default function Title(props: Props) {
	return (
		<>
			<h2 className=" max-sm:h-[160px] animate-fade-down animate-ease-in-out animate-duration-[2000ms] 2xl:h-[calc(100svh-766px)] flex-center max-sm:text-3xl max-2xl:text-5xl 2xl:text-6xl sm:p-5 relative">{props.title}</h2>
			<p className={`${titilium.className} relative max-sm:text-base md:text-xl lg:text-2xl max-w-[800px] w-full max-lg:px-5 md:mx-auto text-center text-muted-foreground`}>
				{props.sub}
			</p>
		</>
	);
}