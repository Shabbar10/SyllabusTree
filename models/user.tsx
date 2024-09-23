import mongoose, { Document, Schema } from "mongoose";

// Define the User interface extending Document
interface IUser extends Document {
    username: string;
    password: string;
}

// Define the schema
const userSchema: Schema<IUser> = new Schema({
    username: { type: String, unique: true, required: true }, // Added required for good practice
    password: { type: String, required: true } // Added required for good practice
});

// Create the model
const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
