import { Chart } from "@/components/Chart";
import ContributingMembers from "@/components/task-manager-card-content/ContributingMembers";
import RankedByImpact from "@/components/task-manager-card-content/RankedByImpact";
import TaskNotifications from "@/components/task-manager-card-content/TaskNotifications";
import Upcoming from "@/components/task-manager-card-content/Upcoming";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import React from "react";

const tiles = [
  {
    title: "Tasks Completed",
    component: Chart,
    columns: 3,
  },
  {
    title: "Upcoming",
    component: Upcoming,
    columns: 2,
  },
  {
    title: "Task Notifications",
    component: TaskNotifications,
    columns: 1,
  },
  {
    title: "Contributing Members",
    component: ContributingMembers,
    columns: 4,
  },
];

const TaskManagerPage = () => {
  const tile = ({
    title,
    component: Component,
    columns,
  }: {
    title: string;
    component: any;
    columns: number;
  }) => (
    <Card className="shadow-lg border-none h-full w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex flex-col">
        <Component />
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full h-full">
      {/* Content Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Here's an overview of the tasks you completed
      </h1>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 grid-flow-row">
        <div className="col-span-1 lg:col-span-3 h-85">{tile(tiles[0])}</div>
        <div className="col-span-1 lg:col-span-2">{tile(tiles[1])}</div>
        <div className="col-span-1 lg:col-span-2">{tile(tiles[2])}</div>
        <div className="col-span-1 lg:col-span-3">{tile(tiles[3])}</div>
        {/* {tiles.map(({ title, component: Component, columns }, index) => (
          <div className={`col-span-1 lg:col-span-2`}>
            <Card className="shadow-lg border-none h-full w-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">{title}</CardTitle>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <Component />
              </CardContent>
            </Card>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TaskManagerPage;
