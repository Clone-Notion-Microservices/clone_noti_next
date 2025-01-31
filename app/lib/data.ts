import {customers, latestTasks, revenue, TasksTable} from '../lib/placeholder-data';

const BASE_URL = 'http://localhost:3010/api';
const ITEMS_PER_PAGE = 6;

// DASHBOARD SECTION

export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return revenue;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestTasks() {
  try {
    // const data = await sql<LatestTaskRaw>`
    //   SELECT tasks.amount, customers.name, customers.image_url, customers.email, tasks.id
    //   FROM tasks
    //   JOIN customers ON tasks.customer_id = customers.id
    //   ORDER BY tasks.date DESC
    //   LIMIT 5`;
    //
    // const latestTasks = data.rows.map((task) => ({
    //   ...task,
    //   amount: formatCurrency(task.amount),
    // }));
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return latestTasks;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tasks.');
  }
}

export async function fetchCardData() {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    // const taskCountPromise = sql`SELECT COUNT(*) FROM tasks`;
    // const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    // const taskstatusPromise = sql`SELECT
    //      SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
    //      SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
    //      FROM tasks`;
    //
    // const data = await Promise.all([
    //   taskCountPromise,
    //   customerCountPromise,
    //   taskstatusPromise,
    // ]);
    //
    // const numberOfTasks = Number(data[0].rows[0].count ?? '0');
    // const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    // const totalPaidTasks = formatCurrency(data[2].rows[0].paid ?? '0');
    // const totalPendingTasks = formatCurrency(data[2].rows[0].pending ?? '0');
    //
    // return {
    //   numberOfCustomers,
    //   numberOfTasks,
    //   totalPaidTasks,
    //   totalPendingTasks,
    // };
    return {}
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
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
    const response = await fetch(`
    ${BASE_URL}/tasks?page=${currentPage}&limit=${ITEMS_PER_PAGE}&query=${query}&projectId=${projectId}`);
    const {data, meta} = await response.json()

    return {data: data, meta: meta}
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks.');
  }
}

export async function fetchTasksPages(query: string, currentPage: number, projectId: string = '') {
  try {
    const {meta} = await fetchFilteredTasks(query, currentPage, projectId);
    return meta;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of tasks.');
  }
}

export async function fetchTaskById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    return await response.json()
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}

// END TASKS SECTION


// USERS SECTION
export async function fetchCustomers() {
  try {


    // const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    // const data = await sql<CustomersTableType>`
    // SELECT
    //   customers.id,
    //   customers.name,
    //   customers.email,
    //   customers.image_url,
    //   COUNT(tasks.id) AS total_tasks,
    //   SUM(CASE WHEN tasks.status = 'pending' THEN tasks.amount ELSE 0 END) AS total_pending,
    //   SUM(CASE WHEN tasks.status = 'paid' THEN tasks.amount ELSE 0 END) AS total_paid
    // FROM customers
    // LEFT JOIN tasks ON customers.id = tasks.customer_id
    // WHERE
    //   customers.name ILIKE ${`%${query}%`} OR
    //     customers.email ILIKE ${`%${query}%`}
    // GROUP BY customers.id, customers.name, customers.email, customers.image_url
    // ORDER BY customers.name ASC
    // `;
    //
    // const customers = data.rows.map((customer) => ({
    //   ...customer,
    //   total_pending: formatCurrency(customer.total_pending),
    //   total_paid: formatCurrency(customer.total_paid),
    // }));

    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch customers table.');
  }
}

// Section Project Fetch

export async function fetchProjects() {
  try {
    const response = await fetch(`${BASE_URL}/projects`)
    const {data} = await response.json()

    return transformDataProject(data);

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all projects.');
  }
}

// END USERS SECTION


// PROJECTS SECTION

export async function fetchFilteredProjects(query: string,
                                            currentPage: number,
) {
  try {
    const response = await fetch(`
    ${BASE_URL}/projects?page=${currentPage}&limit=${ITEMS_PER_PAGE}&query=${query}`);
    const {data, meta} = await response.json()

    const aData = transformDataProject(data);

    return {data: aData, meta: meta}

  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch filter all projects.');
  }
}

export async function fetchProjectsPages(query: string, currentPage: number) {
  try {
    const {meta} = await fetchFilteredProjects(query, currentPage);
    return meta;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of projects.');
  }
}

export async function fetchProjectById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/projects/${id}`);
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
