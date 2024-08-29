"use client"

import { useMediaQuery } from "@/app/hooks/useMediaQuery"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"

const chartData = [
  { mes: "Enero", ventas: Math.floor(Math.random() * 100) },
  { mes: "Febrero", ventas: Math.floor(Math.random() * 100) },
  { mes: "Marzo", ventas: Math.floor(Math.random() * 100) },
  { mes: "Abril", ventas: Math.floor(Math.random() * 100) },
  { mes: "Mayo", ventas: Math.floor(Math.random() * 100) },
  { mes: "Junio", ventas: Math.floor(Math.random() * 100) },
]

const chartConfig = {
  label: {
    color: "rgb(0,0,0)",
  },
} satisfies ChartConfig

export default function HalfYearSalesChart() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className='aspect-auto h-[500px] w-full'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[500px] w-full'>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <CartesianGrid horizontal={false} stroke="rgb(60,60,60)" />
            <XAxis type="number" dataKey="ventas" hide />
            <YAxis
              dataKey="mes"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={{fill:"rgb(23,23,23)"}}
              content={<ChartTooltipContent indicator="dot"/>}
            />
            <Bar 
              dataKey="ventas" 
              stroke="rgb(255,255,255)" 
              fill="rgb(255,255,255)" 
              fillOpacity={0.8}
              radius={4} >
              
              <LabelList
                dataKey="ventas"
                position="right"
                offset={8}
                className="fill-white"
                fontSize={12}
              />

            </Bar>
          </BarChart>
        </ChartContainer>

    </div>

  )
}