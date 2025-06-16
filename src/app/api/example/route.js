import { NextResponse } from 'next/server';

export async function GET() {
  // In a real application, you might fetch data from a database,
  // call another service, or perform other backend tasks.
  const data = {
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    randomNumber: Math.floor(Math.random() * 100),
  };

  return NextResponse.json(data);
}

// You can also define POST, PUT, DELETE, etc. handlers here
// export async function POST(request: Request) {
//   const body = await request.json();
//   // Process body...
//   return NextResponse.json({ received: body });
// }
