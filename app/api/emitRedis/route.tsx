import { NextResponse, NextRequest } from 'next/server';
import { createClient } from "redis";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const publisher = createClient({
    url: "redis://localhost:6379"
  });

  try {
    await publisher.connect();
    console.log("Publisher connected");

    const { searchTerm } = await request.json();

    if (!searchTerm) {
      console.log("ERR: No search term provided\n");
    }

    await publisher.publish('storm-trigger', JSON.stringify({ action: "search", searchTerm }));

    return NextResponse.json({ message: 'YouTube search triggered', searchTerm }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await publisher.quit();
  }
}
