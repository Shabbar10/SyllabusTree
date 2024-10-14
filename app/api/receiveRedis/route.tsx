import { NextResponse, NextRequest } from 'next/server';
import { createClient } from "redis";
import { MongoClient } from "mongodb";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const subscriber = createClient({
    url: "redis://localhost:6379"
  });

  const mongoClient = new MongoClient("mongodb://localhost:27017"); // Update MongoDB connection string as needed
  const db = mongoClient.db("ytprocessdb"); // Replace with your MongoDB database name
  const videosCollection = db.collection("processed_videos"); // Replace with your MongoDB collection name

  let videoIds: string[] = []; // Array to hold videoIds from Redis messages

  try {
    await subscriber.connect();
    console.log("Subscriber connected");

    // Subscribe to 'storm-completion' channel and collect videoIds
    await new Promise<void>((resolve, reject) => {
      subscriber.subscribe('storm-completion', (message) => {
        const { videoId } = JSON.parse(message);  // Extract videoId from Redis message
        videoIds.push(videoId);

        // If 5 messages are received, resolve the promise
        if (videoIds.length >= 3) {
          resolve();
        }
      });

      // Timeout if fewer than 5 messages are received in a short period
      setTimeout(() => resolve(), 3000); // Adjust the timeout as needed
    });

    // Fetch videos from MongoDB based on videoIds
    await mongoClient.connect();
    const videos = await videosCollection.find({ videoId: { $in: videoIds } }).toArray();

    // Return the array of videos
    return NextResponse.json(videos, { status: 200 });

  } catch (error) {
    console.error("Error in Redis or MongoDB interaction:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    await subscriber.quit();
    await mongoClient.close();
  }
}
