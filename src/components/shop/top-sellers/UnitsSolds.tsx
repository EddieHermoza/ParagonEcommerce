'use client'
import CountUp from 'react-countup';

type Props = {
  quantity:number,
  duration:number,
  className?:string,
  children?:React.ReactNode
  CountclassName?:React.StyleHTMLAttributes<HTMLSpanElement>['className'];
}

export default function UnitsSolds(props:Props) {
  return (
    <div className={`${props.className}`}>
        <CountUp end={props.quantity} duration={props.duration} enableScrollSpy className={`${props.CountclassName} `}/>
        {props.children}
    </div>
  );
}