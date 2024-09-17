import User from "@/models/user";
import connectToDatabase from "@/lib/db";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request)
{
    try {
        connectToDatabase();
        const {username, password} = await request.json()
        const userExistance = await User.findOne({username})
        if(userExistance){
            return NextResponse.json({error: "user already exists"})
        }
        const hashpassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username, 
            password: hashpassword
        })
        await newUser.save()

        return NextResponse.json({message: "success", status:201})
    } catch (err) {
        return NextResponse.json({error: "server error", status: 500})
    }
}