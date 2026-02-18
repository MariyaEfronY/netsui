import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "netsui_secure_protocol_2026";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // 1. Find Admin & Validate via the model method
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return NextResponse.json(
        { error: "Invalid Credentials" },
        { status: 401 },
      );
    }

    // 2. Generate Token
    const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: "8h" });

    // 3. Create Response & Set HttpOnly Cookie
    const response = NextResponse.json({
      success: true,
      message: "Welcome back, Admin",
    });

    response.cookies.set("adminToken", token, {
      httpOnly: true, // Prevents XSS (JavaScript cannot read this)
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8, // 8 Hours
      path: "/",
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Auth System Failure" }, { status: 500 });
  }
}
