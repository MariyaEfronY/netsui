import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "netsui_secret_2026";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // 1. Locate the Admin node
    const admin = await Admin.findOne({ email });

    // 2. Use the new model method to verify (Encapsulated logic)
    if (!admin || !(await admin.comparePassword(password))) {
      return NextResponse.json(
        { error: "Authorization Failed: Invalid Identity" },
        { status: 401 },
      );
    }

    // 3. Issue the secure corridor token
    const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_SECRET, {
      expiresIn: "8h",
    });

    const response = NextResponse.json({
      success: true,
      message: "Liaison Established",
    });

    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Node System Failure" }, { status: 500 });
  }
}
