"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { month: "Monday", low: 5, high: 6 },
  { month: "Tuesday", low: 3, high: 5 },
  { month: "Wednesday", low: 4, high: 2 },
  { month: "Thursday", low: 2, high: 1 },
  { month: "Friday", low: 2, high: 4 },
];

const chartConfig = {
  low: {
    label: "Low Priority",
    color: "#9084E8",
  },
  high: {
    label: "High Priority",
    color: "#4632D8",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="flex h-1/2 w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="low" fill="var(--color-low)" radius={4} />
        <Bar dataKey="high" fill="var(--color-high)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
