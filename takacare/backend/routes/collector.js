// backend/routes/collector.js
const express = require("express");
const router = express.Router();
const sendConfirmationEmail = require("../utils/mailer");

router.post("/", async (req, res) => {
  const { name, email, phone, location } = req.body;

  if (!name || !email || !phone || !location) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await sendConfirmationEmail(
      email,
      "Welcome to TakaCare",
      `Hi ${name},\n\nThanks for signing up to be a collector in ${location}. We’ll contact you after verification.\n\nCheers,\nTakaCare Team`
    );
    res.status(200).json({ message: "Collector signup received" });
  } catch (err) {
    res.status(500).json({ message: "Email failed", error: err.message });
  }
});

module.exports = router;
