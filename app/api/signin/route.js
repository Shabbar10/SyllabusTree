import User from "@/models/user";
import connectToDatabase from "@/lib/db";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        connectToDatabase();
        const { username, password } = await request.json()
        const userExistance = await User.findOne({ username })
        if (!userExistance) {
            return NextResponse.json({ message: "user not exists", status: 401 })
        }
        const checkPassword = await bcrypt.compare(password, userExistance.password)

        if (!checkPassword) {
            return NextResponse.json({ message: "wrong password", status: 401 })
        }

        return NextResponse.json({ message: "success", status: 201 })


    } catch (err) {
        return NextResponse.json({ message: "server error", status: 500 })
    }
}