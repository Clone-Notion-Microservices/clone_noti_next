import Form from '@/app/ui/tasks/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchUsers, fetchProjects, fetchTaskById} from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [task, users, projects] = await Promise.all([
    fetchTaskById(id),
    fetchUsers(),
    fetchProjects()
  ]);
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
      <Form task={task} users={users} projects={projects} />
    </main>
  );
}