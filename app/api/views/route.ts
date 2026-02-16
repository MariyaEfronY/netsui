import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Define a simple Inline Schema for the Visitor
const VisitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  id: { type: String, default: "site_views" },
});

const Visitor =
  mongoose.models.Visitor || mongoose.model("Visitor", VisitorSchema);

export async function GET() {
  try {
    await connectDB();

    // Increment count by 1. { upsert: true } creates the record if it doesn't exist.
    const result = await Visitor.findOneAndUpdate(
      { id: "site_views" },
      { $inc: { count: 1 } },
      { upsert: true, new: true },
    );

    return NextResponse.json({ count: result.count });
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
