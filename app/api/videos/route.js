import { MongoClient } from "mongodb";

let client;
let db;

const connectToDatabase = async () => {
  if (db) {
    return;
  }

  try {
    client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db(); // Use the default database from the connection URL
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw new Error("Database connection error");
  }
};

export async function POST(request) {
  try {
    const { subject } = await request.json();
    await connectToDatabase();

    // const videos = await db.collection("final").find({ 'subject': subject }).toArray(); // Fetch all documents from the 'videos' collection
    const videos = await db.collection("final").aggregate([
      { $match: { subject: subject } },
      { $sort: { final_rating: -1 } }
    ]).toArray()

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch videos" }), {
      status: 500,
    });
  }
}
