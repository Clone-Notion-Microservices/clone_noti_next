'use server';

import {z} from 'zod';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {auth, signIn} from '@/auth';
import {AuthError} from "next-auth";

const BASE_URL = process.env.BACKEND_URL;

async function extracted(method: string, body: string = '') {
  const session = await auth();
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: body
  };
}

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

  // const token = req.cookies.get('token')?.value;
  const raw = CreateTask.parse({
    assignedTo: Number(formData.get('userId')),
    projectId: Number(formData.get('projectId')),
    title: formData.get('title'),
    description: formData.get('description'),
    deadline: formData.get('deadline'),
    status: formData.get('status'),
  });

  const requestOptions = await extracted("POST", JSON.stringify(raw));

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

  const requestOptions = await extracted("PATCH", JSON.stringify(raw));

  const response = await fetch(`${BASE_URL}/tasks/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function deleteTask(id: string) {

  const requestOptions = await extracted("DELETE");

  const response = await fetch(`${BASE_URL}/tasks/${id}`, requestOptions);

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

  const requestOptions = await extracted("POST", JSON.stringify(raw));

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

  const requestOptions = await extracted("PATCH", JSON.stringify(raw));

  const response = await fetch(`${BASE_URL}/projects/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteProject(id: string) {
  const requestOptions = await extracted("DELETE");

  const response = await fetch(`${BASE_URL}/projects/${id}`, requestOptions);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  revalidatePath('/dashboard/tasks');
}

// END PROJECTS SECTION

// LOGIN SECTION
export async function loginUser(email: string, password: string) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password}),
    };

    const response = await fetch(`${BASE_URL}/auth/login`,  requestOptions);
    return await response.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
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


// USER SECTION

const FormSchemaUser = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  available: z.boolean(),
  role: z.string(),
  projects_permission: z
    .union([
      z.string(),
      z.array(z.string()),
      z.undefined(),
    ]),
  tasks_permission: z
    .union([
      z.string(),
      z.array(z.string()),
      z.undefined(),
    ]),
});

const CreateUser = FormSchemaUser.omit({id: true})

export async function deleteUser(id: string) {}

const UpdateUser = FormSchemaUser.omit({id: true});

export async function updateUser(id: string, formData: FormData) {

  console.log(formData);

  const raw = UpdateUser.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    available: Boolean(formData.get('available')),
    role: formData.get('role'),
    projects_permission: formData.getAll('projects') ?? [],
    tasks_permission: formData.getAll('tasks') ?? [],
  });
  const requestOptions = await extracted("PATCH", JSON.stringify(raw));

  const response = await fetch(`${BASE_URL}/users/${id}`, requestOptions);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
}