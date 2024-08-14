import { FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";


export  function YearSalesCard() {
  return (

    <div className="w-full h-32 gap-5 px-3 border divide-x-2 rounded flex-center">
        <MdOutlinePayment size={40}  />
        <div className="flex flex-col gap-1 pl-3">
            <span className="text-3xl tracking-widest shadow-white/50 text-shadow-lg">$10000</span> 
            <span className="text-gray-300">Ventas totales del año</span>
        </div>
    </div>
  );
}

export  function YearRevenueCard() {
    return (
    <div className="w-full h-32 gap-5 px-3 border divide-x-2 rounded flex-center">
        <LiaHandHoldingUsdSolid size={60} className=""  />
        <div className="flex flex-col gap-1 pl-3">
            <span className="text-3xl tracking-widest shadow-white/50 text-shadow-lg">$10000</span> 
            <span className="text-gray-300">Ganancia total del año</span>
        </div>
    </div>
    );
  }
  export  function CustomerCountCard() {
    return (
    <div className="w-full h-32 gap-5 px-3 border divide-x-2 rounded flex-center">
        <FiUsers size={40}  />
        <div className="flex flex-col gap-1 pl-3">
            <span className="text-3xl tracking-widest shadow-white/50 text-shadow-lg">24</span> 
            <span className="text-gray-300">Clientes registrados del mes</span>
        </div>
    </div>
    );
  }
  export function StockProductsCard() {
    return (
    <div className="w-full h-32 gap-5 px-3 border divide-x-2 rounded flex-center">
        <FaComputer size={40} />
            <div className="flex flex-col gap-1 pl-3">
            <div className="flex items-center justify-between w-full">
                <span className="text-3xl tracking-widest shadow-white/50 text-shadow-lg">78</span> 
                <div className="flex gap-3">
                    <span className="text-green-500 text-shadow-lg shadow-green-500/50">50</span>
                    <span>/</span>
                    <span className="text-red-500 text-shadow-lg shadow-red-500/50">28</span>
                </div>
            </div>
            <span className="text-gray-300">Productos Registrados</span>
        </div>
    </div>
    );
  }

