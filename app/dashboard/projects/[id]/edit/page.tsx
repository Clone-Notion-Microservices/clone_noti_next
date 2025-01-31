import Form from '@/app/ui/projects/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchProjectById, fetchTasksPages} from '@/app/lib/data';
import {lusitana} from "@/app/ui/fonts";
import {Suspense} from "react";
import {TasksTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/tasks/table";
import Pagination from "@/app/ui/tasks/pagination";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const project = await fetchProjectById(id);
  const query = ''
  const currentPage = 1
  const { lastPage } = await fetchTasksPages(query, currentPage, id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/dashboard/projects' },
          {
            label: 'Edit Project',
            href: `/dashboard/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form project={project} />
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Related Tasks</h1>
      </div>
      <Suspense key={query + currentPage} fallback={<TasksTableSkeleton/>}>
        <Table query={query} currentPage={currentPage} projectId={id} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={lastPage} />
      </div>
    </main>
  );
}