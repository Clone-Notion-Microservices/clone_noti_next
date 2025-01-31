import Form from '@/app/ui/tasks/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchCustomers, fetchProjects, fetchTaskById} from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [task, customers, projects] = await Promise.all([
    fetchTaskById(id),
    fetchCustomers(),
    fetchProjects()
  ]);
  // const customers = await fetchCustomers();
  // const projects = await fetchProjects();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/dashboard/tasks' },
          {
            label: 'Edit Task',
            href: `/dashboard/tasks/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form task={task} customers={customers} projects={projects} />
    </main>
  );
}