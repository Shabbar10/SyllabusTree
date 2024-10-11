import mongoose from "mongoose";
import { NextRequest, NextResponse } from 'next/server'; // Assuming you're using Next.js
import Video from "../../../models/video";


const connectDatabase = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL as string); // Type assertion for environment variable

    console.log("Connected to Mongo");
  } catch (error) {
    console.error("Error connecting:", error);
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse JSON body
    const { vids }: { vids: string[] } = await request.json();
    console.log("Vids:", vids);

    // Connect to the database
    await connectDatabase();

    let videos = [];

    // Using for...of to handle asynchronous operations correctly
    for (const vid of vids) {
      const video = await Video.findOne({}); // Replace with actual query logic
      if (video) {
        videos.push(video);
      }
    }

    console.log(videos);

    // Return response with status 200
    return new NextResponse(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error in POST request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
