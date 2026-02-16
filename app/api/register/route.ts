import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Establish the Bridge
    await connectDB();

    // 2. Parse the Incoming Data
    const data = await req.json();

    // 3. Create the Record
    const newEntry = await Registration.create(data);

    // 4. Return Success
    return NextResponse.json(
      {
        success: true,
        message: "Data Secured",
        id: newEntry._id,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Registration Error:", error);

    // Handle Duplicate Email Error (MongoDB Error Code 11000)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "System failure during registration" },
      { status: 500 },
    );
  }
}
