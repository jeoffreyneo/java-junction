import express from "express";
import bcrypt from "bcryptjs";
import Membership from "../models/membership.js";

const router = express.Router();

// ✅ Register new member
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, plan } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const existingMember = await Membership.findOne({ email });
    if (existingMember)
      return res.status(400).json({ message: "Email already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newMember = new Membership({
      name,
      email,
      password: hashedPassword,
      plan,
      remainingHours: plan === "Monthly" ? 100 : 20, // Example
    });

    await newMember.save();
    res.status(201).json({
      message: "Membership registered successfully.",
      member: newMember,
    });
  } catch (err) {
    console.error("❌ Error registering membership:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Login member
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required." });

    const member = await Membership.findOne({ email });
    if (!member)
      return res.status(400).json({ message: "No account found with this email." });

    const isMatch = await bcrypt.compare(password, member.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password." });

    res.json({
      message: "Login successful",
      user: {
        _id: member._id,
        name: member.name,
        email: member.email,
        plan: member.plan,
        remainingHours: member.remainingHours,
        createdAt: member.createdAt,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get member by ID
router.get("/:id", async (req, res) => {
  try {
    const member = await Membership.findById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
