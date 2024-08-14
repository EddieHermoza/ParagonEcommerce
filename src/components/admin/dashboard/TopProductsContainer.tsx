import { TopProductsChart } from "@/components/charts";
import { products } from "@/app/data/data";
import { CustomImage } from "@/components/ui";


const Colors = ["rgb(255,100,0)","rgb(255,0,0)","rgb(0,255,0)","rgb(0,0,255)","rgb(255,255,255)","rgb(150,0,150)","rgb(100,100,100)"]

const chartData = [
  { product: "Producto 1 adadadad", sales: 275, fill:Colors[0]},
  { product: "Producto 2", sales: 200, fill:Colors[1]},
  { product: "Producto 3", sales: 187, fill:Colors[2]},
  { product: "Producto 4", sales: 173, fill:Colors[3] },
  { product: "Producto 5", sales: 90, fill:Colors[4] },
  { product: "Producto 6", sales: 173, fill:Colors[5] },
  { product: "Producto 7", sales: 90, fill:Colors[6] },
]

export default function TopProductsContainer() {
  return (
    <>
      <div className="relative flex flex-col w-full gap-2 ">
        <span className="text-xl tracking-widest">Productos más vendidos</span>
        <TopProductsChart data={chartData}/>
        <span className="text-gray-300">Se mostraran en "Lo más Vendido"</span>
      </div>
      
      <div className="relative flex flex-col w-full gap-2 max-lg:items-center justify-evenly ">
        {products.slice(0,7).map((product,index)=>(
          <div key={index} className="flex items-center gap-2 max-sm:w-72 w-96 max-sm:text-xs">
            <span style={{backgroundColor:Colors[index]}} className="w-2 h-2 rounded-sm"></span>
            <CustomImage src="/images/Laptop.webp" height={50} width={50} alt="" />
            {product.name}
           </div>
        ))}
      </div>
    </>
  );
}