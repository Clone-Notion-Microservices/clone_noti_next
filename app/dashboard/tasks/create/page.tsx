import Form from '@/app/ui/tasks/create-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchCustomers, fetchProjects} from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();
  const projects = await fetchProjects();
  console.log(projects);
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
      <Form customers={customers} projects={projects} />
    </main>
  );
}