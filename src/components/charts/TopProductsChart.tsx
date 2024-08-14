"use client"
import {CustomTooltipChart} from '@/components/charts';
import React, { useState } from 'react';
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { Cell } from 'recharts';
import {
  ChartConfig,
  ChartTooltip,
  ChartContainer,

} from "@/components/ui/chart"



type Product = {
  product: string;
  sales: number;
  fill: string;
};

type Props = {
  data: Product[];
};


const chartConfig = {} satisfies ChartConfig

export default function TopProductsChart({data} : Props) {
  const [activeIndex, setActiveIndex] = useState<number>(8);

  const onPieEnter = (data:any ,index: number) => {
    setActiveIndex(index);
  }

  const onPieLeave = ()=>{
    setActiveIndex(8)
  }


  return (

      <ChartContainer
          config={chartConfig}
          className="w-full h-96 aspect-auto"
      >
          <PieChart>
              <ChartTooltip
                cursor={false}

                content={<CustomTooltipChart />}
              />
              <Pie
                data={data}
                dataKey="sales"
                outerRadius={150}
                innerRadius={90}
                fillOpacity={0.6}
                activeIndex={activeIndex}
                paddingAngle={5}
                activeShape={({
                  outerRadius = 0,
                  ...props
                }: PieSectorDataItem) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                )}
              
                nameKey="product"
                onMouseLeave={onPieLeave}
                onMouseEnter={onPieEnter}
                strokeWidth={2}
              >
              {data.map((data, index) => (
                <Cell key={`cell-${index}`} stroke={data.fill} fill={data.fill} />
              ))}

              </Pie>
          </PieChart>
      </ChartContainer>

  )
}

