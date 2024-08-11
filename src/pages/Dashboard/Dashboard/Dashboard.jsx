"use client";

import { Area, AreaChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
const PieData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#262657)",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

import { FaUser } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import SideBar from "@/pages/Shared/SideBar/SideBar";

const Dashboard = () => {
  return (
    <div className="">
      <h1 className="max-w-[250px] w-full p-4">Deshboard</h1>
      <div className="flex">
        <SideBar />
        <div className="w-full container space-y-4 mb-8">
          <div className="grid  md:grid-cols-3 gap-4">
            <Card>
              <div>
                <div className="grid">
                  <div className="flex p-8">
                    <FaUser className="text-7xl p-4 rounded-md bg-red-200" />
                    <h1 className="text-5xl p-4">168</h1>
                  </div>
                  <span className="px-8">
                    <Progress className="bg-[#ff003352]" value="33" />
                  </span>
                  <h3 className="px-8 py-2">Doctor</h3>
                </div>
              </div>
            </Card>
            <Card>
              <div>
                <div className="grid">
                  <div className="flex p-8">
                    <FaUser className="text-7xl p-4 rounded-md bg-red-200" />
                    <h1 className="text-5xl p-4">168</h1>
                  </div>
                  <span className="px-8">
                    <Progress className="bg-[#ff003352]" value="33" />
                  </span>
                  <h3 className="px-8 py-2">Doctor</h3>
                </div>
              </div>
            </Card>
            <Card>
              <div>
                <div className="grid">
                  <div className="flex p-8">
                    <FaUser className="text-7xl p-4 rounded-md bg-red-200" />
                    <h1 className="text-5xl p-4">168</h1>
                  </div>
                  <span className="px-8">
                    <Progress className="bg-[#ff003352]" value="33" />
                  </span>
                  <h3 className="px-8 py-2">Doctor</h3>
                </div>
              </div>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <Card className="w-full">
              <CardHeader className="pb-0">
                <CardTitle className="text-start">Appointment</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pb-0">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[250px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey="browser"
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-start">Patient</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={PieData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />

                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="var(--color-desktop)"
                      fillOpacity={0.4}
                      stroke="var(--color-desktop)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
