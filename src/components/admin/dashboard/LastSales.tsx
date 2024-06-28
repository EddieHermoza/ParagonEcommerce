import { LuArrowUpRight } from "react-icons/lu";
export default function LastSales() {
  return (
    <ul className="relative flex flex-col h-full gap-2 divide-y-2 divide-neutral-800">
      {Array.from({ length: 5 }, (_, i) => (
        <LastSaleCard key={i}/>
      ))}
  </ul>
  );
}

const LastSaleCard = ()=>{
    return(
        <li className="flex justify-between w-full h-24 p-2 sm:p-4 items-center gap-3 relative" >
            <button className="btn-secondary flex-center h-10 min-w-10 rounded gap-1 md:px-3">
                <span className="max-md:hidden">Ver</span>
                <LuArrowUpRight className="w-6 h-6"/>
            </button>
            <div className="flex flex-col justify-between w-full">
                <span className="max-sm:text-base sm:text-lg md:text-xl">Eddie Hermoza Echevarria</span>
                <span className="max-sm:text-xs text-sm text-gray-400">eddie.ehc04@gmail.com</span>
            </div>
            <div className="absolute bottom-1 right-1 ">
                <span className="max-sm:text-xl text-2xl">+$100000</span>
            </div>
        </li>
    )   
};