
import {LinkTransition} from "@/components/ui";
type Props={
  tittle:string
  height:number
  width:number
  fontSize:number
}
export default function Glitch(props:Props) {
  return (
    <div className={`glitch  overflow-hidden relative  flex justify-center items-center sm:mx-3`} style={{height: props.height, width:props.width}}>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
    </div>
  );
}