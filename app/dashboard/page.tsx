import {lusitana} from "@/app/ui/fonts";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestTasks from "@/app/ui/dashboard/latest-tasks";
import { Suspense } from "react";
import {LatestTasksSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";

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
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestTasksSkeleton/>}>
          <LatestTasks/>
        </Suspense>

      </div>
    </main>
  )
}