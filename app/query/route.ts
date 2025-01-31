// import { db } from "@vercel/postgres";

// const client = await db.connect();

// async function listTasks() {
// 	const data = await client.sql`
//     SELECT tasks.amount, customers.name
//     FROM tasks
//     JOIN customers ON tasks.customer_id = customers.id
//     WHERE tasks.amount = 666;
//   `;

// 	return data.rows;
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  // 	return Response.json(await listTasks());
  // } catch (error) {
  // 	return Response.json({ error }, { status: 500 });
  // }
}
