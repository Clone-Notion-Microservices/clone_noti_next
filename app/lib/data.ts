import {auth} from "@/auth";
import {User} from "@/app/lib/definitions";

const BASE_URL = process.env.BACKEND_URL;
const ITEMS_PER_PAGE = 6;

async function extracted(method: string) {
  const session = await auth();
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.accessToken}`,
    },
  };
}

// DASHBOARD SECTION

export async function fetchTasksChart() {
  try {
    const requestOptions = await extracted("GET");

    const response = await fetch(`${BASE_URL}/tasks`, requestOptions)
    const {data} = await response.json()

    const monthsMap = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const tasksByMonth = data.reduce((acc, task) => {
      const date = new Date(task.deadline);
      const month = monthsMap[date.getUTCMonth()];

      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month]++;
      return acc;
    }, {});

    // Transform array model
    return Object.entries(tasksByMonth).map(([month, amount]) => ({
      month,
      amount: Number(amount),
    }));
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all projects.');
  }
}

export async function fetchLatestTasks() {
  try {

    const requestOptions = await extracted("GET");
    const users = await fetchUsers();

    return await Promise.all(users.map(async (user: User) => {
      const response = await fetch(`${BASE_URL}/tasks/user/${user.id}`, requestOptions);
      const {to_do = 0, completed = 0, in_progress = 0} = await response.json();
      const totalTasks = to_do + in_progress + completed;
      return {
        id: user.id,
        name: user.name,
        image_url: '/users/amy-burns.png',
        email: user.email,
        amount: totalTasks
      }
    }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tasks.');
  }
}

// END DASHBOARD SECTION

// TASKS SECTION
export async function fetchFilteredTasks(
  query: string,
  currentPage: number,
  projectId: string = '',
) {

  try {
    const requestOptions = await extracted("GET");

    const response = await fetch(
      `${BASE_URL}/tasks?page=${currentPage}&limit=${ITEMS_PER_PAGE}&query=${query}&projectId=${projectId}`,
      requestOptions
    );
    const {data, meta} = await response.json()

    return {data: data, meta: meta}
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks.');
  }
}

// export async function fetchTasksPages(query: string, currentPage: number, projectId: string = '') {
//   try {
//     const {meta} = await fetchFilteredTasks(query, currentPage, projectId);
//     return meta;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of tasks.');
//   }
// }

export async function fetchTaskById(id: string) {
  try {
    const requestOptions = await extracted("GET");
    const response = await fetch(`${BASE_URL}/tasks/${id}`, requestOptions);
    return await response.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}

// END TASKS SECTION


// USERS SECTION
export async function fetchUsers() {
  try {
    const requestOptions = await extracted("GET");
    const response = await fetch(`${BASE_URL}/users`, requestOptions)
    const {data} = await response.json()
    return data;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all users.');
  }
}

export async function fetchFilteredUsers(query: string, currentPage: number) {

  try {
    const requestOptions = await extracted("GET");

    const response = await fetch
    (`${BASE_URL}/users?page=${currentPage}&limit=${ITEMS_PER_PAGE}&query=${query}`, requestOptions);
    const {data, meta} = await response.json()

    if (!data) throw new Error('Failed to fetch projects.');

    return {data, meta}

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filter all projects.');
  }
}

export async function getTasksByUser(userId: string, status: string) {
  const requestOptions = await extracted("GET");
  const response = await fetch(`${BASE_URL}/tasks/user/${userId}`, requestOptions);
  const states = await response.json()
  states["total"] = (states["to_do"] ?? 0) + (states["in_progress"] ?? 0) + (states["completed"] ?? 0);
  states["pending"] = (states["in_progress"] ?? 0) + (states["to_do"] ?? 0);

  return states[status];
}

export async function fetchUserById(id: string, email: string = '') {
  try {
    const requestOptions = await extracted("GET");
    const response = await fetch(`${BASE_URL}/users/${id}?email=${email}`, requestOptions);
    return await response.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}

// Section Project Fetch

export async function fetchProjects() {
  try {
    const requestOptions = await extracted("GET");

    const response = await fetch(`${BASE_URL}/projects`, requestOptions)
    const {data} = await response.json()

    return transformDataProject(data);

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all projects.');
  }
}

// END USERS SECTION


// PROJECTS SECTION

export async function fetchFilteredProjects(query: string, currentPage: number
) {
  try {
    const requestOptions = await extracted("GET");

    const response = await fetch
    (`${BASE_URL}/projects?page=${currentPage}&limit=${ITEMS_PER_PAGE}&query=${query}`, requestOptions);
    const {data, meta} = await response.json()

    if (!data) throw new Error('Failed to fetch projects.');

    const aData = transformDataProject(data);

    return {data: aData, meta: meta}

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filter all projects.');
  }
}

// export async function fetchProjectsPages(query: string, currentPage: number) {
//   try {
//     const {meta} = await fetchFilteredProjects(query, currentPage);
//     return meta;
//   } catch (error) {
//     console.error('Database Error:', error);
//     throw new Error('Failed to fetch total number of projects.');
//   }
// }

export async function fetchProjectById(id: string) {
  try {
    const requestOptions = await extracted("GET");

    const response = await fetch(`${BASE_URL}/projects/${id}`, requestOptions);
    return await response.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects.');
  }
}

const transformDataProject = (data: any) => {
  return data.map((project: { id: number; name: string; description: string; createdAt: string; }) => ({
    id: project.id,
    name: project.name,
    description: project.description,
    date: project.createdAt,
  }));
}

// END PROJECTS SECTION
