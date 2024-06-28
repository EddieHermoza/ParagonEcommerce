//const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));
import { LineChart,BarChart } from "@/components/charts";
import { LastSales } from "@/components/admin";
import { FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { DoughnutChart } from "@/components/charts";

export default async function Page() {

  return (
    <>
      <div className="relative flex flex-col  gap-10">
        <h1 className="text-5xl">Dashboard</h1>

        <section className="w-full grid grid-flow-row max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">

          <div className="h-32 border w-full rounded flex-center divide-x-2 gap-5 px-3">
            <LiaHandHoldingUsdSolid size={60} className=""  />
            <div className="flex flex-col pl-3 gap-1">
             <span className="text-3xl shadow-white/50 text-shadow-lg tracking-widest">$10000</span> 
             <span className="text-gray-300">Ganancia total del año</span>
            </div>
          </div>

          <div className="h-32 border w-full  rounded flex-center divide-x-2 gap-5 px-3">
            <MdOutlinePayment size={40}  />
            <div className="flex flex-col pl-3 gap-1">
             <span className="text-3xl shadow-white/50 text-shadow-lg tracking-widest">$10000</span> 
             <span className="text-gray-300">Ventas totales del año</span>
            </div>
          </div>

          <div className="h-32 border w-full rounded  flex-center divide-x-2 gap-5 px-3">
            <FiUsers size={40}  />
            <div className="flex flex-col pl-3 gap-1">
             <span className="text-3xl shadow-white/50 text-shadow-lg tracking-widest">24</span> 
             <span className="text-gray-300">Clientes registrados del mes</span>
            </div>
          </div>

          <div className="h-32 border w-full rounded flex-center divide-x-2 gap-5 px-3">
            <FaComputer size={40} />
            <div className="flex flex-col pl-3 gap-1">
              <div className="flex items-center w-full justify-between">
                <span className="text-3xl shadow-white/50 text-shadow-lg tracking-widest">78</span> 
                <div className="flex gap-3">
                  <span className="text-shadow-lg text-green-500 shadow-green-500/50">50</span>
                  <span>/</span>
                  <span className="text-shadow-lg text-red-500 shadow-red-500/50">28</span>
                </div>
              </div>
              <span className="text-gray-300">Productos Registrados</span>
            </div>
          </div>

        </section>

        <section className="relative flex w-full h-full gap-4 max-lg:flex-col">
          <div className=" max-lg:w-full lg:w-[55%] h-auto flex flex-col justify-between items-start gap-2 p-2 border-4 border-neutral-800 rounded">
            <span className="text-xl tracking-widest">Grafica de Ventas Realizadas</span>
            <BarChart/>
            <span className="text-gray-400">Ultimos 6 meses</span>
          </div>
          <div className=" max-lg:w-full lg:w-[45%] h-auto flex flex-col gap-2 p-2 border-4 border-neutral-800 rounded">
            <span className="text-xl tracking-widest">Ultimas Ventas Realizadas: </span>
            <LastSales/>
          </div>
        </section>

        <section className="relative flex w-full h-full gap-4 max-lg:flex-col-reverse">
            <div className="flex flex-col items-start justify-between h-auto gap-2 p-2 border-4 rounded max-lg:w-full lg:w-1/2 border-neutral-800">
              <span className="text-xl tracking-widest">Crecimiento de Clientes Registrados: </span>
              <LineChart/>
              <span className="text-gray-300">Ultimos 6 meses</span>
            </div>
            <div className="flex flex-col items-start justify-between h-auto gap-2 p-2 border-4 rounded max-lg:w-full lg:w-1/2 border-neutral-800">
              <span className="text-xl tracking-widest">Servicios Mas Solicitados: </span>
              <BarChart/>
              <span className="text-gray-300">Ultimos 6 meses</span>
            </div>
        </section>

      </div>
    </>
  );
}