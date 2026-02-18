import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Admin email already exists" },
        { status: 409 },
      );
    }

    // Password will be hashed by the 'pre-save' hook in your model automatically
    await Admin.create({ username, email, password });

    return NextResponse.json({
      success: true,
      message: "Admin Created Successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Registration Internal Error" },
      { status: 500 },
    );
  }
}
