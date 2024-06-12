'use client'
import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";

type Props = {
  banner: string;
  bannerMobile: string;
};

export default function CustomBanner(props: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="w-screen h-auto relative filter saturate-150 overflow-y-hidden">
      {isMobile ? (
        <Image
          className="parallax-animation w-full bg-gray-900"
          src={props.bannerMobile}
          width={1200}
          height={1600}
          alt="Mobile Banner"
        />
      ) : (
        <Image
          className="parallax-animation w-full bg-gray-900"
          src={props.banner}
          width={2000}
          height={714}
          alt="Desktop Banner"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </section>
  );
}
