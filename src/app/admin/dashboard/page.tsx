import { HalfYearSalesChart, TopBrandsChart, CustomerGrowthChart } from "@/components/charts";
import { StockSelector } from "@/components/testing/stock-selector";
import { LastSales } from "@/components/admin";
import { LinearChart } from "@/components/charts";
import { Suspense } from "react";
import { companies } from "@/lib/stock-data";
import { getStockData } from "@/lib/get-stock-data";
import { TopProductsContainer } from "@/components/admin";
import { YearSalesCard, CustomerCountCard, StockProductsCard, YearRevenueCard } from "@/components/admin"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";



export default async function Page({ searchParams }: { searchParams: { ticker?: string } }) {

	const ticker = searchParams.ticker || companies[0].ticker;
	const stockData = getStockData(ticker);

	return (
		<>
			<div className="relative flex flex-col gap-10">

				<section className="grid w-full grid-flow-row gap-6 max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">

					<YearSalesCard />

					<YearRevenueCard />

					<CustomerCountCard />

					<StockProductsCard />

				</section>

				<section className="relative w-full space-y-5">
					<Card>
						<CardHeader>
							<CardTitle>
								Ventas del año
							</CardTitle>
							<div className="w-full flex justify-end">
								<StockSelector />
							</div>
						</CardHeader>
						<CardContent>
							<Suspense>
								<LinearChart chartData={stockData} ticker={ticker} />
							</Suspense>
						</CardContent>
					</Card>
				</section>

				<section className="relative w-full flex gap-5 max-lg:flex-col">
					<Card className="w-full lg:w-[55%]">
						<CardHeader>
							<CardTitle>
								Grafica de Ventas Realizadas
							</CardTitle>

						</CardHeader>
						<CardContent>
							<Suspense>
								<HalfYearSalesChart />
							</Suspense>
						</CardContent>
						<CardFooter>
							Ultimos 6 meses
						</CardFooter>
					</Card>

					<Card className="w-full lg:w-[45%]">
						<CardHeader>
							<CardTitle>
								Ultimas Ventas Realizadas
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Suspense>
								<LastSales />
							</Suspense>
						</CardContent>
						<CardFooter>
							Ultimos 6 meses
						</CardFooter>
					</Card>
				</section>

				<section className="w-full relative flex gap-5 max-lg:flex-col">
					<Card className="w-full lg:w-[40%]">
						<CardHeader>
							<CardTitle>
								Las Mejores Marcas
							</CardTitle>

						</CardHeader>
						<CardContent>
							<Suspense>
								<TopBrandsChart />
							</Suspense>
						</CardContent>
						<CardFooter>
							Ultimos 6 meses
						</CardFooter>
					</Card>

					<Card className="w-full lg:w-[60%]">
						<CardHeader>
							<CardTitle>
								Crecimiento de clientes registrados
							</CardTitle>

						</CardHeader>
						<CardContent>
							<Suspense>
								<CustomerGrowthChart />
							</Suspense>
						</CardContent>
						<CardFooter>
							Ultimos 6 meses
						</CardFooter>
					</Card>
				</section>

				<section className="relative w-full ">

					<TopProductsContainer />

				</section>

			</div>

		</>
	);
}