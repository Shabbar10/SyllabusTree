import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server'; // Importing Next.js request types
import connectToDatabase from "../../../lib/db";
import User from '../../../models/user';


export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Ensure database connection
        await connectToDatabase();

        // Parsing the request body
        const { username, password }: { username: string; password: string } = await request.json();

        // Check if the user already exists
        const userExistance = await User.findOne({ username });
        if (userExistance) {
            return NextResponse.json({ error: "User already exists" });
        }

        // Hash the password before storing it
        const hashpassword = await bcrypt.hash(password, 10);

        // Create a new user document
        const newUser = new User({
            username, 
            password: hashpassword
        });

        // Save the new user in the database
        await newUser.save();

        // Return a successful response
        return NextResponse.json({ message: "Success", status: 201 });

    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ error: "Server error", status: 500 });
    }
}
