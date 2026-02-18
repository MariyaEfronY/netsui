import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { NextResponse } from "next/server";

// --- EXISTING POST METHOD ---
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newEntry = await Registration.create(data);

    return NextResponse.json(
      { success: true, message: "Data Secured", id: newEntry._id },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Registration Error:", error);
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

// --- NEW GET METHOD FOR ADMIN FETCHING ---
export async function GET() {
  try {
    // 1. Establish the Bridge
    await connectDB();

    // 2. Fetch all records, sorted by newest first
    const registrations = await Registration.find({}).sort({ createdAt: -1 });

    // 3. Return the data payload
    return NextResponse.json(
      {
        success: true,
        count: registrations.length,
        data: registrations,
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Fetching Error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve liaison database" },
      { status: 500 },
    );
  }
}
