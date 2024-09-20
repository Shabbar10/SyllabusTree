import mongoose, { Schema } from "mongoose";

const VideoSchema = new Schema({
  title: {
    type: String,
  },
  likes: {
    type: Number
  },
  duration: {
    type: Number
  },
  subject: {
    type: String
  },
  thumbnail: {
    type: String
  },
  url: {
    type: String
  },
  channel_title: {
    type: String
  },
  publishedAt: {
    type: Date
  },
  final_rating: {
    type: Number
  }
}, { collection: 'final' })

const Video = mongoose.models.videos || mongoose.model("videos", VideoSchema)

export default Video
