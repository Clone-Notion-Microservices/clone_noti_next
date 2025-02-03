import {Suspense} from "react";
import {TasksTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/users/table";
import Pagination from "@/app/ui/tasks/pagination";
import {fetchFilteredUsers} from "@/app/lib/data";


export default async function UsersPage(
  props:
  {
    searchParams?: {
      query?: string;
      page?: string
    }
  }
) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || '';
  const {meta, data } = await fetchFilteredUsers(query, currentPage);
  const lastPage = meta.lastPage || 1;

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<TasksTableSkeleton/>}>
        <Table users={data} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={lastPage}/>
      </div>
    </div>
  )
}