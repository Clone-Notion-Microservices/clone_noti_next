// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '$2a$12$IJ5fz7EBtvQ3tUd135fueufmvMXBiYEL8tfecF65/j53Dc6WNsim.',
  },
];

const customers = [
  {
    id: '1',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '2',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '4',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: '5',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '6',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const tasks = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
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
    customer_id: customers[0].id,
    project_id: ProjectsTable[0].id,
    title: 'Mr. Scott Fowler',
    description: 'epham@hotmail.com',
    deadline: '2025-01-25',
    status: 'completed',
  },
  {
    id: '7ebffeaa-eaa2-4248-a3d8-3ee35eece70d',
    customer_id: customers[1].id,
    project_id: ProjectsTable[1].id,
    title: 'John Johnson',
    description: 'richardsonchristina@hotmail.com',
    deadline: '2025-01-28',
    status: 'completed',
  },
  {
    id: '3c1ec571-689e-42c6-af14-03784ba1fc94',
    customer_id: customers[2].id,
    project_id: ProjectsTable[1].id,
    title: 'Frank Brown',
    description: 'parkermonica@knox-barrett.net',
    deadline: '2025-01-12',
    status: 'to-do'
  },
  {
    id: '3c1ec571-689e-42c6-af14-03784ba3fc94',
    customer_id: customers[3].id,
    project_id: ProjectsTable[0].id,
    title: 'Frank Brown',
    description: 'parkermonica@knox-barrett.net',
    deadline: '2025-01-12',
    status: 'in-progress',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const latestTasks = [
  {
    id: 'aaaa647d-df84-4220-8879-694d0b45c606',
    name: 'Sydney Pham',
    image_url: '/customers/amy-burns.png',
    email: 'james80@yahoo.com',
    amount: 345345
  },
  {
    id: 'eaaba52f-18b7-42cd-95d6-75b074a74837',
    name: 'Jackie Harris',
    image_url: '/customers/balazs-orban.png',
    email: 'bruce00@hotmail.com',
    amount: 3456234
  },
  {
    id: 'e5c667a2-f96a-410d-9174-7e733bf5ae3e',
    name: 'Ashley Graham',
    image_url: '/customers/delba-de-oliveira.png',
    email: 'kimberly83@walker.com',
    amount: 7897567
  },
  {
    id: '1dbc06c0-67c0-427f-8190-0bc490ea77b0',
    name: 'Michael Wolfe',
    image_url: '/customers/evil-rabbit.png',
    email: 'johnsonalexander@hotmail.com',
    amount: 546456
  },
  {
    id: '78f687ea-402c-46fe-a586-3dd0bd279a5c',
    name: 'Kathleen Owens',
    image_url: '/customers/lee-robinson.png',
    email: 'elizabeth19@rhodes.com',
    amount: 3457867
  },
  {
    id: '12422884-9a2f-4a9f-a0a6-37dccbfc46f0',
    name: 'William Galloway',
    image_url: '/customers/michael-novotny.png',
    email: 'whitneywilliams@hall-johnson.com',
    amount: 1234324
  }
];

export { users, customers, tasks, revenue, latestTasks, TasksTable, ProjectsTable};
