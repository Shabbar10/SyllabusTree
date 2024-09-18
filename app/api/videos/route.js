import { MongoClient } from "mongodb";

let client;
let db;

const connectToDatabase = async () => {
    if (db) {
        console.log("Already connected 2");
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
        console.log(subject);
        await connectToDatabase();

        const videos = await db.collection("videos").find({ 'subject': subject }).toArray(); // Fetch all documents from the 'videos' collection

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
