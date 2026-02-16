import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable");
}

/** * We use a global variable to store the connection.
 * This prevents the "Too many connections" error in Next.js.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null };
}

export const connectDB = async () => {
  // If a connection already exists, return it immediately
  if (cached.conn) return cached.conn;

  try {
    // Establish a new connection
    cached.conn = await mongoose.connect(MONGO_URI);
    console.log("✅ NETSUI_CORE: Database Connected");
    return cached.conn;
  } catch (error) {
    console.error("❌ NETSUI_CORE: Connection Error", error);
    throw error;
  }
};
