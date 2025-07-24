// backend/routes/pickup.js
const express = require("express");
const router = express.Router();
const sendConfirmationEmail = require("../utils/mailer");

router.post("/", async (req, res) => {
  const { name, address, email, wasteType } = req.body;

  if (!name || !address || !email || !wasteType) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await sendConfirmationEmail(
      email,
      "Pickup Request Received",
      `Hi ${name},\n\nYour pickup for ${wasteType} at ${address} has been received. We'll be in touch shortly.\n\nThank you for using TakaCare!`
    );
    res.status(200).json({ message: "Pickup request submitted" });
  } catch (err) {
    res.status(500).json({ message: "Email failed", error: err.message });
  }
});

module.exports = router;
