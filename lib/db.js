import mongoose, {Mongoose} from "mongoose";

const connectToDatabase = async()=>
{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected successfully")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDatabase