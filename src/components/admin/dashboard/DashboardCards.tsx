import { FiDollarSign, FiUsers } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PiChartLineUpLight, PiUsersThreeFill } from "react-icons/pi";


export function YearSalesCard() {
    return (

        <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ventas</CardTitle>
                <PiChartLineUpLight size={22} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">$12,000</div>
                <p className="text-xs text-muted-foreground">
                    +19% respecto al mes pasado
                </p>
            </CardContent>
        </Card>
    );
}

export function YearRevenueCard() {
    return (
        <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Ganancia Total
                </CardTitle>
                <FiDollarSign size={22} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">$4,000</div>
                <p className="text-xs text-muted-foreground">
                    +20.1% respecto al mes pasado
                </p>
            </CardContent>
        </Card>
    );
}
export function CustomerCountCard() {
    return (
        <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Clientes Registrados
                </CardTitle>
                <PiUsersThreeFill size={22} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">+235</div>
                <p className="text-xs text-muted-foreground">
                    +180.1% respecto al mes pasado
                </p>
            </CardContent>
        </Card>
    );
}
export function StockProductsCard() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Productos Registrados
                </CardTitle>
                <FaComputer size={22} className="text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between w-full">
                    <div className="text-3xl font-bold">78</div>
                    <div className="flex gap-3">
                        <span className="text-green-500 text-shadow-lg shadow-green-500/50">50</span>
                        <span>/</span>
                        <span className="text-red-500 text-shadow-lg shadow-red-500/50">28</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

