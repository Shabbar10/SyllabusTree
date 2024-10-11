import mongoose, { Document, Schema } from "mongoose";

// Define the Video interface extending Document
interface IVideo extends Document {
    title: string;
    likes: number;
    duration: number;
    subject: string;
    thumbnail: string;
    url: string;
    channel_title: string;
    publishedAt: Date;
    final_rating: number;
}

// Define the schema
const VideoSchema: Schema<IVideo> = new Schema({
    title: {
        type: String,
        required: true, // Consider adding required validation as needed
    },
    likes: {
        type: Number,
        default: 0, // Default value can be useful
    },
    duration: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    channel_title: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        required: true,
    },
    final_rating: {
        type: Number,
        required: true,
    }
}, { collection: 'final' });

// Create the model
const Video = mongoose.models.videos || mongoose.model<IVideo>("videos", VideoSchema);

export default Video;
