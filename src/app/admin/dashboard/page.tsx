import {  HalfYearSalesChart, TopBrandsChart, CustomerGrowthChart } from "@/components/charts";
import { StockSelector } from "@/components/testing/stock-selector";
import { LastSales } from "@/components/admin";
import { LinearChart } from "@/components/charts";
import { Suspense } from "react";
import { companies } from "@/lib/stock-data";
import { getStockData } from "@/lib/get-stock-data";
import {TopProductsContainer} from "@/components/admin";
import {YearSalesCard,CustomerCountCard,StockProductsCard,YearRevenueCard} from "@/components/admin"



export default async function Page({ searchParams }: {searchParams: { ticker?: string }}) {

  const ticker = searchParams.ticker || companies[0].ticker;
  const stockData = getStockData(ticker);
  
  return (
    <>
      <div className="relative flex flex-col gap-10">
        <h1 className="text-5xl">Dashboard</h1>

        <section className="grid w-full grid-flow-row gap-6 max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">

          <YearSalesCard/>

          <YearRevenueCard/>

          <CustomerCountCard/>

          <StockProductsCard/>

        </section>

        <section className="relative w-full space-y-5">  
          <StockSelector/>
          <Suspense>
            <LinearChart chartData={stockData} ticker={ticker} />
          </Suspense>

        </section>
        
        <section className="relative flex w-full gap-4 max-lg:flex-col">
          
          <div className=" max-lg:w-full lg:w-[55%] flex flex-col justify-between items-start gap-2 p-2 border-4 border-neutral-800 rounded">
            <span className="text-xl tracking-widest">Grafica de Ventas Realizadas</span>
            <HalfYearSalesChart/>
            <span className="text-gray-300">Ultimos 6 meses</span>
          </div>

          <div className=" max-lg:w-full lg:w-[45%] flex flex-col gap-2 p-2 border-4 border-neutral-800 rounded">
            <span className="text-xl tracking-widest">Ultimas Ventas Realizadas: </span>
            <LastSales/>
          </div>

        </section>

        <section className="relative flex w-full gap-4 max-lg:flex-col-reverse">
          
            <div className="relative flex flex-col items-start justify-between gap-2 p-2 border-4 rounded max-lg:w-full lg:w-1/2 border-neutral-800">
              <span className="text-xl tracking-widest">Crecimiento de Clientes Registrados: </span>
              <CustomerGrowthChart/>
              <span className="text-gray-300">Ultimos 6 meses</span>
            </div>
            
            <div className="relative flex flex-col items-start justify-between  gap-2 p-2 border-4 rounded max-lg:w-full lg:w-1/2 border-neutral-800">
              <span className="text-xl tracking-widest">Marcas más Solicitadas</span>
              <TopBrandsChart/>
              <span className="text-gray-300">Ultimos 6 meses</span>
            </div>
            
        </section>

        <section className="relative flex justify-center w-full p-2 border-4 rounded border-neutral-800 max-lg:flex-col">
          
          <TopProductsContainer/>

        </section>

      </div>
      
    </>
  );
}