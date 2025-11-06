import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  remainingHours: { type: Number, default: 5 }, // starting hours
});

export default mongoose.model("User", userSchema);
