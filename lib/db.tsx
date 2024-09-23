import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string); // Ensure the env variable is a string
        console.log("connected successfully");
    } catch (error) {
        console.error(error); // Use console.error for errors
    }
}

export default connectToDatabase;
