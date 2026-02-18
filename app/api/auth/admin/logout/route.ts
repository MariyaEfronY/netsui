import { NextResponse } from "next/server";

export async function POST() {
  try {
    // 1. Create the response
    const response = NextResponse.json(
      { success: true, message: "Bridge Terminated" },
      { status: 200 },
    );

    // 2. Clear the adminToken cookie
    response.cookies.set("adminToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0), // Set expiration to the past
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
