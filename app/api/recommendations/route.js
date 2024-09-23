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
    const { vids } = await request.json()
    console.log("Vids:", vids)

    await connectDatabase()

    let videos = []

    // vids.map(vid => {
    //   videos[...videos, await Video.findOne({})]
    // })
    // const video = await Video.findOne({})

    // console.log(videos)

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error(error)
  }
}
