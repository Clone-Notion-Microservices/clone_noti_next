import Image from 'next/image';
import { UpdateTask, DeleteTask } from '@/app/ui/tasks/buttons';
import TaskStatus from '@/app/ui/tasks/status';
import { formatDateToLocal } from '@/app/lib/utils';
import {fetchFilteredTasks, fetchProjects} from '@/app/lib/data';
export default async function TasksTable({
  query,
  currentPage,
  projectId,
}: {
  query: string;
  currentPage: number;
  projectId?: string;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage, projectId);
  const projects = await fetchProjects();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks.data?.map((task: any) => (
              <div
                key={task.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src='/users/evil-rabbit.png'
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${task.title}'s profile picture`}
                      />
                      <p>{task.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                  <TaskStatus status={task.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p>{formatDateToLocal(task.deadline)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateTask id={task.id} />
                    <DeleteTask id={task.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Deadline
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Project
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks.data?.map((task: any) => (
                <tr
                  key={task.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src='/users/evil-rabbit.png'
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${task.title}'s profile picture`}
                      />
                      <p>{task.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {task.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(task.deadline)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {`${projects.find((item: any) => item.id === task.projectId)?.name}`}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskStatus status={task.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTask id={task.id} />
                      <DeleteTask id={task.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
