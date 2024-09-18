import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title: {
        type: String
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
}, { collection: 'yt' })

const Video = mongoose.models.videos || mongoose.model("videos", VideoSchema)
export default Video

// at the end the name of the collection is all lowercase letters so in code, keep the variable name slightly different so as to keep the code look cleaner...