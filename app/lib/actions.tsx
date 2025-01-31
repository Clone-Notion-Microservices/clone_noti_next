'use server';

import {z} from 'zod';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const BASE_URL = 'http://localhost:3010/api';

// TASKS SECTION

const FormSchemaTask = z.object({
  id: z.string(),
  assignedTo: z.number(),
  projectId: z.number(),
  title: z.coerce.string(),
  description: z.coerce.string(),
  deadline: z.string(),
  status: z.enum(['to-do', 'in-progress', 'completed']),
});

const CreateTask = FormSchemaTask.omit({id: true})

export async function createTask(formData: FormData) {

  const raw = CreateTask.parse({
    assignedTo: Number(formData.get('customerId')),
    projectId: Number(formData.get('projectId')),
    title: formData.get('title'),
    description: formData.get('description'),
    deadline: formData.get('deadline'),
    status: formData.get('status'),
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raw)
  };

  const response = await fetch(`${BASE_URL}/tasks`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/tasks/')
  redirect('/dashboard/tasks/')
}

const UpdateTask = FormSchemaTask.omit({id: true});

export async function updateTasks(id: string, formData: FormData) {
  const raw = UpdateTask.parse({
    assignedTo: Number(formData.get('assignedTo')),
    projectId: Number(formData.get('projectId')),
    title: formData.get('title'),
    description: formData.get('description'),
    deadline: formData.get('deadline'),
    status: formData.get('status'),
  });

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raw)
  };

  const response = await fetch(`${BASE_URL}/tasks/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function deleteTask(id: string) {
  const response = await fetch(`${BASE_URL}/tasks/${id}`, {method: 'DELETE'});

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/tasks');
}

// END TASKS SECTION

// PROJECTS SECTION

const FormSchemaProject = z.object({
  id: z.string(),
  name: z.string(),
  description: z.coerce.string(),
});

const CreateProject = FormSchemaProject.omit({id: true})


export async function createProjects(formData: FormData) {

  const raw = CreateProject.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raw)
  };


  const response = await fetch(`${BASE_URL}/projects`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/projects/')
  redirect('/dashboard/projects/')
}

const UpdateProject = FormSchemaProject.omit({id: true});

export async function updateProjects(id: string, formData: FormData) {
  const raw = UpdateProject.parse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  const requestOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(raw)
  };

  const response = await fetch(`${BASE_URL}/projects/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  const response = await fetch(`${BASE_URL}/projects/${id}`, {method: 'DELETE'});
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  revalidatePath('/dashboard/tasks');
}

// END PROJECTS SECTION

// LOGIN SECTION

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(formData)
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// END LOGIN SECTION