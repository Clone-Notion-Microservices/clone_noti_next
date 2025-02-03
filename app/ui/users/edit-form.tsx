'use client';

import {FormattedUsersTable} from '@/app/lib/definitions';
import {
  AtSymbolIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {Button} from '@/app/ui/button';
import {updateUser} from '@/app/lib/actions';

import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {MinusIcon, PlusIcon} from "@heroicons/react/20/solid";
import SwitchActiveComponent from "@/app/ui/users/switch-active";
import SwitchRoleComponent from "@/app/ui/users/switch-role";
import {UserIcon} from "@heroicons/react/16/solid";
import {Controller, useForm} from "react-hook-form";

export default function EditUserForm(
  {
    user,
    filterPermissions
  }: {
    user: FormattedUsersTable;
    filterPermissions: any
  }) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      role: user.role === 'admin',
      available: user.available
    },
  });

  const updateUserWithId = updateUser.bind(null, String(user.id));
  return (
    <form action={updateUserWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* User Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name User
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                placeholder="Enter a name user"
                defaultValue={user.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email User
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                placeholder="Enter a valid email address"
                defaultValue={user.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <AtSymbolIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 mb-4">
          {/* Sección "Active" */}
          <div className="flex flex-col">
            <label htmlFor="available" className="mb-2 block text-sm font-medium">
              Active
            </label>
            <Controller
              name="available"
              control={control}
              render={({ field }) => (
                <>
                  <input type="hidden" name="available" value={String(field.value)} />
                  <SwitchActiveComponent value={field.value} onChange={field.onChange} />
                </>
              )}
            />
          </div>
          {/* Sección "Role" */}
          <div className="flex flex-col">
            <label htmlFor="role" className="mb-2 block text-sm font-medium">
              Role
            </label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <>
                  <input type="hidden" name="role" value={String(field.value ? 'admin' : 'team_member')} />
                  <SwitchRoleComponent value={field.value} onChange={field.onChange} />
                </>
              )}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Permissions
          </label>
          <div className="space-y-4 mb-2">
            Users
          </div>
          <label className="text-sm text-gray-600">
            (Only administrators can view and edit this module)
          </label>
          {filterPermissions.map((section) => (
            <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                <DisclosureButton
                  className="group flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden"/>
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden"/>
                        </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                <div className="space-y-4">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultValue={option.value}
                            defaultChecked={option.checked}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}`}
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 checked:border-[#f1b90a] checked:bg-[#f1b90a] indeterminate:border-[#f1b90a] indeterminate:bg-[#f1b90a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1b90a] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                        </div>
                      </div>
                      <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/users"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit User</Button>
      </div>
    </form>
  );
}

