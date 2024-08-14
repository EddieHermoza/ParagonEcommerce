"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { marca: "Aorus", ventas: Math.floor(Math.random() * 100) },
    { marca: "HyperX", ventas: Math.floor(Math.random() * 100) },
    { marca: "Logitech", ventas: Math.floor(Math.random() * 100) },
    { marca: "Razer", ventas: Math.floor(Math.random() * 100)},
    { marca: "JBL", ventas: Math.floor(Math.random() * 100)},
  ]
  
  const chartConfig = {
    label: {
      color: "rgb(0,0,0)",
    },
  } satisfies ChartConfig

export default function TopBrandsChart() {

    return (
        <div className="aspect-auto h-[500px] w-full ">
        <ChartContainer config={chartConfig} className='aspect-auto h-[500px] w-full'>
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid vertical={false} stroke="rgb(60,60,60)" />
            <XAxis
              dataKey="marca"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip 
                cursor={{ fill: 'rgba(23, 23, 23)' }}
                content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar 
                dataKey="ventas" 
                fill="rgba(255, 255, 0)" 
                fillOpacity={0.6}
                stroke="rgba(255,255,0)"
                radius={4} 
            >
            </Bar>

          </BarChart>
        </ChartContainer>

        </div>

  );
}