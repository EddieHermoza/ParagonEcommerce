
import {LinkTransition} from "@/components/ui";
type Props={
  className?:string
  tittle:string
  height:number
  width:number
  fontSize:number
}
export default function Glitch(props:Props) {
  return (
    <div className={`glitch  overflow-hidden relative flex-center ${props.className}`} style={{height: props.height, width:props.width}}>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
        <LinkTransition href={"/"} className={`absolute inset-0 text-center`} style={{fontSize:props.fontSize}}>{props.tittle}</LinkTransition>
    </div>
  );
}