import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import {fetchUserById, fetchUsers} from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const user = await fetchUserById(id);

  const permissions = {
    projects: user.projects_permission,
    tasks: user.tasks_permission
  };

  const defaultOptions = [
    { value: 'view', label: 'View' },
    { value: 'edit', label: 'Edit' },
    { value: 'delete', label: 'Delete' }
  ];

  const filterPermissions = Object.entries(permissions).map(([id, value]) => {
    const selectedPermissions = JSON.parse(value);
    return {
      id,
      name: id.charAt(0).toUpperCase() + id.slice(1),
      options: defaultOptions.map(option => ({
        ...option,
        checked: selectedPermissions.includes(option.value)
      }))
    };
  });

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {label: 'Users', href: '/dashboard/users'},
          {
            label: 'Edit Users',
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={user} filterPermissions={filterPermissions}/>
    </main>
  );
}