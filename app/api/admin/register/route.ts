import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";

/**
 * API Route: /api/auth/admin/register
 * Description: Registers a new administrator node with hashed credentials.
 */
export async function POST(req: Request) {
  try {
    // 1. Establish Database Connection
    await connectDB();

    // 2. Extract Credentials from Request Body
    const { username, email, password } = await req.json();

    // 3. Validation: Ensure all fields are present
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Incomplete credentials provided" },
        { status: 400 },
      );
    }

    // 4. Integrity Check: Prevent duplicate email registrations
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        { error: "This email is already registered as an administrator" },
        { status: 409 },
      );
    }

    // 5. Creation: Password will be automatically hashed by the Admin model's 'pre-save' hook
    const newAdmin = await Admin.create({
      username,
      email,
      password,
    });

    // 6. Return Success Response
    return NextResponse.json(
      {
        success: true,
        message: "Institutional Node Initialized",
        adminId: newAdmin._id,
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("Admin Registration Error:", error);

    return NextResponse.json(
      { error: "Internal system failure during admin initialization" },
      { status: 500 },
    );
  }
}
