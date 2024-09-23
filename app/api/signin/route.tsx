import User from "../../../models/user";
import connectToDatabase from "../../../lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server'; // Importing Next.js request types
import bcrypt from "bcrypt";

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        // Ensure database connection
        await connectToDatabase();

        // Parsing the request body
        const { username, password }: { username: string; password: string } = await request.json();

        // Check if the user exists
        const userExistance = await User.findOne({ username });
        if (!userExistance) {
            return NextResponse.json({ message: "User does not exist", status: 401 });
        }

        // Compare the entered password with the hashed password in the database
        const checkPassword = await bcrypt.compare(password, userExistance.password);

        if (!checkPassword) {
            return NextResponse.json({ message: "Wrong password", status: 401 });
        }

        // Return a successful response if authentication passes
        return NextResponse.json({ message: "Success", status: 201 });

    } catch (err) {
        console.error("Error in POST request:", err);
        return NextResponse.json({ message: "Server error", status: 500 });
    }
}
