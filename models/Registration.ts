import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
      default: "Prefer not to say",
    },
    location: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
