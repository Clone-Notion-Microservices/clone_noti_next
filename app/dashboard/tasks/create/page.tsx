import Form from '@/app/ui/tasks/create-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchUsers, fetchProjects} from '@/app/lib/data';

export default async function Page() {
  const users = await fetchUsers();
  const projects = await fetchProjects();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tasks', href: '/dashboard/tasks' },
          {
            label: 'Create Task',
            href: '/dashboard/tasks/create',
            active: true,
          },
        ]}
      />
      <Form users={users} projects={projects} />
    </main>
  );
}