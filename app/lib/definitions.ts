// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Task = {
  id: string;
  customer_id: string;
  project_id: string;
  title: string;
  description: string;
  deadline: string;
  status: 'to-do' | 'in-progress' | 'completed';
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestTask = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestTaskRaw = Omit<LatestTask, 'amount'> & {
  amount: number;
};

export type TasksTable = {
  id: string;
  customer_id: string;
  project_id: string;
  title: string;
  description: string;
  deadline: string;
  status: 'to-do' | 'in-progress' | 'completed';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_tasks: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_tasks: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type ProjectField = {
  id: string;
  name: string;
}

export type TaskForm = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: 'to-do' | 'in-progress' | 'completed';
  projectId: number
  assignedTo: number
  createdAt: string
  updatedAt: string
  available: Boolean
};

export type ProjectForm = {
  id: string;
  name: string;
  description: string;
  date: string;
};
