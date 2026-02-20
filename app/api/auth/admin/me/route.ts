// app/api/auth/admin/me/route.ts

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// --- ADD THIS LINE ---
const JWT_SECRET = process.env.JWT_SECRET || "netsui_secure_protocol_2026";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const token = req.cookies.get("adminToken")?.value;

    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    // Now JWT_SECRET is defined and will work
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    const admin = await Admin.findById(decoded.id).select("username email");

    if (!admin)
      return NextResponse.json({ error: "Not Found" }, { status: 404 });

    return NextResponse.json({
      success: true,
      admin: {
        name: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("JWT Verification Error:", error); // Helpful for debugging
    return NextResponse.json({ error: "Invalid Session" }, { status: 401 });
  }
}
