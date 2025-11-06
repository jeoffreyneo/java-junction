import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: { type: String, default: "Standard" },
  remainingHours: { type: Number, default: 20 },
  createdAt: { type: Date, default: Date.now },
});

const Membership = mongoose.model("Membership", membershipSchema);
export default Membership;
