import {fetchProjectsPages, fetchTasksPages} from "@/app/lib/data";
import {lusitana} from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import {Suspense} from "react";
import {TasksTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/projects/table";
import Pagination from "@/app/ui/tasks/pagination";
import {CreateProject} from "@/app/ui/projects/buttons";

export default async function ProjectsPage(
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
  const { lastPage } = await fetchProjectsPages(query, currentPage);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search projects..."/>
        <CreateProject/>
      </div>
      <Suspense key={query + currentPage} fallback={<TasksTableSkeleton/>}>
        <Table query={query} currentPage={currentPage}/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={lastPage}/>
      </div>
    </div>
  );
}