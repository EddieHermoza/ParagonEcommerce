
import Image from 'next/image';
type Props = {
  banner: string;
  bannerMobile:string
}





export default function CustomBanner(props: Props) {


  return(
    <section className='w-screen h-auto relative filter saturate-150 overflow-y-hidden'>
      <Image className='parallax-animation w-full max-md:hidden bg-gray-900 ' src={props.banner} width={2000} height={714} alt=''></Image>
      <Image className='parallax-animation w-full md:hidden bg-gray-900' src={props.bannerMobile} width={1200} height={1600} alt=''></Image>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </section> 
  )
}
