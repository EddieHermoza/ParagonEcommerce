
import Image from "next/image"

type Props={
  className?:string
  height:number
  width:number
  alt:string
  src:string
}


export default function CustomImage(props:Props) {

  let customsrc='/images/loading.svg'

  if (props.src.startsWith('http')) {
    customsrc = props.src
  }

  
  return (
    <Image
    
      className={props.className}
      height={props.height}
      width={props.width}
      src={"/images/Laptop.webp"}
      alt={props.alt}
    >
    </Image>
  )
}
