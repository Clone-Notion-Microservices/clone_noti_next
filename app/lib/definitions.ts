// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
};

export type Task = {
  id: string;
  user_id: string;
  project_id: string;
  title: string;
  description: string;
  deadline: string;
  status: 'to_do' | 'in_progress' | 'completed';
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
};

export type TasksChart = {
  month: string;
  amount: number;
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
  user_id: string;
  project_id: string;
  title: string;
  description: string;
  deadline: string;
  status: 'to_do' | 'in_progress' | 'completed';
};

export type UsersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_tasks: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedUsersTable = {
  id: string;
  name: string;
  email: string;
  role: string;
  available: boolean;
  image_url: string;
  total_tasks: number;
  total_pending: string;
  total_completed: string;
};

export type UserField = {
  id: string;
  name: string;
  role: 'admin' | 'team_member' ;
  available: boolean;
  projects_permission: string
  tasks_permission: string
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
  status: 'to_do' | 'in_progress' | 'completed';
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
