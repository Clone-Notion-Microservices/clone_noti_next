// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Admin',
    email: 'user@nextmail.com',
    password: '$2a$12$IJ5fz7EBtvQ3tUd135fueufmvMXBiYEL8tfecF65/j53Dc6WNsim.',
    image_url: '/users/evil-rabbit.png',
  },
];

const tasks = [
  {
    user_id: users[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    user_id: users[0].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    user_id: users[0].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    user_id: users[0].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    user_id: users[0].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    user_id: users[0].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    user_id: users[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    user_id: users[0].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    user_id: users[0].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    user_id: users[0].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    user_id: users[0].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    user_id: users[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    user_id: users[0].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const ProjectsTable = [
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Everest',
    description: 'Cualquier descripcion',
    date: '2025-01-12',
  },
  {
    id: '13D07535-C59E-4157-A011-fec4b6a6442a',
    name: 'Imalayan',
    description: 'otra descripcion',
    date: '2025-01-12',
  }
];

const TasksTable = [
  {
    id: '915a7f3e-6776-44ad-a79b-03df2ed93c25',
    user_id: users[0].id,
    project_id: ProjectsTable[0].id,
    title: 'Mr. Scott Fowler',
    description: 'epham@hotmail.com',
    deadline: '2025-01-25',
    status: 'completed',
  },
  {
    id: '7ebffeaa-eaa2-4248-a3d8-3ee35eece70d',
    user_id: users[0].id,
    project_id: ProjectsTable[1].id,
    title: 'John Johnson',
    description: 'richardsonchristina@hotmail.com',
    deadline: '2025-01-28',
    status: 'completed',
  },
  {
    id: '3c1ec571-689e-42c6-af14-03784ba1fc94',
    user_id: users[0].id,
    project_id: ProjectsTable[1].id,
    title: 'Frank Brown',
    description: 'parkermonica@knox-barrett.net',
    deadline: '2025-01-12',
    status: 'to-do'
  },
  {
    id: '3c1ec571-689e-42c6-af14-03784ba3fc94',
    user_id: users[0].id,
    project_id: ProjectsTable[0].id,
    title: 'Frank Brown',
    description: 'parkermonica@knox-barrett.net',
    deadline: '2025-01-12',
    status: 'in-progress',
  },
];

const tasksChart = [
  { month: 'Jan', amount: 20 },
  { month: 'Feb', amount: 18 },
  { month: 'Mar', amount: 22 },
  { month: 'Apr', amount: 25 },
  { month: 'May', amount: 23 },
  { month: 'Jun', amount: 32 },
  { month: 'Jul', amount: 35 },
  { month: 'Aug', amount: 7 },
  { month: 'Sep', amount: 25 },
  { month: 'Oct', amount: 8 },
  { month: 'Nov', amount: 30},
  { month: 'Dec', amount: 10 },
];

const latestTasks = [
  {
    id: 'aaaa647d-df84-4220-8879-694d0b45c606',
    name: 'Sydney Pham',
    image_url: '/users/amy-burns.png',
    email: 'james80@yahoo.com',
    amount: 345345
  },
  {
    id: 'eaaba52f-18b7-42cd-95d6-75b074a74837',
    name: 'Jackie Harris',
    image_url: '/users/balazs-orban.png',
    email: 'bruce00@hotmail.com',
    amount: 3456234
  },
  {
    id: 'e5c667a2-f96a-410d-9174-7e733bf5ae3e',
    name: 'Ashley Graham',
    image_url: '/users/delba-de-oliveira.png',
    email: 'kimberly83@walker.com',
    amount: 7897567
  },
  {
    id: '1dbc06c0-67c0-427f-8190-0bc490ea77b0',
    name: 'Michael Wolfe',
    image_url: '/users/evil-rabbit.png',
    email: 'johnsonalexander@hotmail.com',
    amount: 546456
  },
  {
    id: '78f687ea-402c-46fe-a586-3dd0bd279a5c',
    name: 'Kathleen Owens',
    image_url: '/users/lee-robinson.png',
    email: 'elizabeth19@rhodes.com',
    amount: 3457867
  },
  {
    id: '12422884-9a2f-4a9f-a0a6-37dccbfc46f0',
    name: 'William Galloway',
    image_url: '/users/michael-novotny.png',
    email: 'whitneywilliams@hall-johnson.com',
    amount: 1234324
  }
];

export { users, tasks, tasksChart, latestTasks, TasksTable, ProjectsTable};
