import mongoose from "mongoose";
import Video from "@/models/video";

const connectDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected")
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log("Connected to Mongo")
  } catch (error) {
    console.error("Error connecting")
  }
};

export async function POST(request) {
  try {
    const { subject } = await request.json()
    // console.log("Subject:", subject)

    await connectDatabase()

    const videos = await Video.aggregate([
      { $match: { 'subject': subject } },
      { $sort: { 'final_rating': -1 } }
    ])

    // console.log(videos)

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error(error)
  }
}
