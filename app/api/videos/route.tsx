import mongoose from "mongoose";
import { NextResponse, NextRequest } from 'next/server';
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
    throw new Error("Database connection error");
  }
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the request body
    const { subject }: { subject: string } = await request.json();
    console.log("Subject:", subject);

    // Ensure database connection
    await connectDatabase();

    // Fetch videos matching the subject, sorted by final rating
    const videos = await Video.aggregate([
      { $match: { subject } },
      { $sort: { final_rating: -1 } },
    ]);

    console.log(videos);

    // Return the fetched videos as a response
    return NextResponse.json(videos, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
