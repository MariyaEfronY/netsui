import { connectDB } from "@/lib/mongodb";
import Registration from "@/models/Registration";
import { NextResponse } from "next/server";

// --- GET: Fetch all registrations for Admin Panel ---
export async function GET() {
  try {
    await connectDB();

    // Fetch all records, sorted by newest first
    const registrations = await Registration.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: registrations.length, data: registrations },
      { status: 200 },
    );
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve records" },
      { status: 500 },
    );
  }
}

// --- POST: Handle User Form Submission ---
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Check if email already exists to prevent crashes
    const existing = await Registration.findOne({ email: body.email });
    if (existing) {
      return NextResponse.json(
        { error: "This email is already registered." },
        { status: 400 },
      );
    }

    const newEntry = await Registration.create(body);

    return NextResponse.json(
      { success: true, data: newEntry },
      { status: 201 },
    );
  } catch (error: any) {
    // Check for Mongoose validation errors
    if (error.name === "ValidationError") {
      return NextResponse.json(
        { error: "Invalid data provided" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Registration Internal System Failure" },
      { status: 500 },
    );
  }
}
