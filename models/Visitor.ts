import mongoose, { Schema, model, models } from "mongoose";

const VisitorSchema = new Schema({
  count: { type: Number, default: 0 },
  label: { type: String, default: "total_views" },
});

const Visitor = models.Visitor || model("Visitor", VisitorSchema);
export default Visitor;
