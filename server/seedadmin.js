// server/seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Membership from "./models/membership.js"; // adjust path/casing to your project

dotenv.config();

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const email = "admin@javajunction.test";
    const existing = await Membership.findOne({ email });
    if (existing) {
      console.log("Admin already exists:", email);
      process.exit(0);
    }

    const hashed = await bcrypt.hash("pogiako123", 10);

    const admin = new Membership({
      name: "Admin User",
      email,
      password: hashed,
      hoursRemaining: 0,
      isAdmin: true
    });

    await admin.save();
    console.log("Admin user created:", email);
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
}

seed();
