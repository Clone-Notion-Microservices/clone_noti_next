import {lusitana} from "@/app/ui/fonts";
import TasksChart from "@/app/ui/dashboard/tasks-chart";
import LatestTasks from "@/app/ui/dashboard/latest-tasks";
import { Suspense } from "react";
import {LatestTasksSkeleton, TasksChartSkeleton} from "@/app/ui/skeletons";

export default async function DashboardPage() {

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidTasks} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingTasks} type="pending" /> */}
        {/* <Card title="Total Tasks" value={numberOfTasks} type="tasks" /> */}
        {/* <Card
        title="Total Users"
        value={numberOfUsers}
        type="users"
      /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<TasksChartSkeleton/>}>
          <TasksChart/>
        </Suspense>
        <Suspense fallback={<LatestTasksSkeleton/>}>
          <LatestTasks/>
        </Suspense>

      </div>
    </main>
  )
}