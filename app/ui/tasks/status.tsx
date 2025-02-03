import {BuildingOfficeIcon, CheckIcon, ClockIcon} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TaskStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'to-do',
          'bg-yellow-500 text-white': status === 'in-progress',
          'bg-green-500 text-white': status === 'completed',
        },
      )}
    >
      {status === 'to_do' ? (
        <>
          To-Do
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'in_progress' ? (
        <>
          In Progress
          <BuildingOfficeIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'completed' ? (
        <>
          Completed
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
