"use client";
import {
  CheckCircle,
  Package,
  PrinterCheck,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { CardExpenseSummary } from "./CardExpenseSummary";
import { CardPopularProducts } from "./CardPopularProducts";
import { CardPurchaseSummary } from "./CardPurchaseSummary";
import { CardSalesSummary } from "./CardSalesSummary";
import { StatCard } from "./StatCar";
import { title } from "process";

export const Dashboard = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 
    xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 
    custom-grid-rows"
    >
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Producto 1"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
            title: "",
            amount: "150.00",
            changePercentage: 130,
            IconComponent: TrendingUp,
          },
          {
            title: "Venta de saco de arina",
            amount: "180.00",
            changePercentage: 30,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Producto 2"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
            title: "Venta de saco de arroz",
            amount: "150.00",
            changePercentage: 130,
            IconComponent: TrendingUp,
          },
          {
            title: "Venta de gaseosas",
            amount: "180.00",
            changePercentage: 30,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Producto 3"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
            title: "Venta de saco de azucar",
            amount: "150.00",
            changePercentage: 130,
            IconComponent: TrendingUp,
          },
          {
            title: "Venta de cervezas",
            amount: "180.00",
            changePercentage: 30,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Producto 4"
        primaryIcon={<PrinterCheck className="text-blue-600 w-6 h-6" />}
        dateRange="22-29 de Noviembre 2024"
        details={[
          {
            title: "Venta de tuberculos",
            amount: "150.00",
            changePercentage: 130,
            IconComponent: TrendingUp,
          },
          {
            title: "Venta de verduras",
            amount: "180.00",
            changePercentage: 30,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};
