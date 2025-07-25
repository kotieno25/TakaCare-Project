// backend/routes/pickup.js
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// POST /api/pickup
router.post("/", async (req, res) => {
  const { location } = req.body;
  if (!location) return res.status(400).json({ error: "Location required." });

  try {
    const pickup = await prisma.pickup.create({
      data: {
        location,
      },
    });
    res.status(201).json({ message: "Pickup request saved.", pickup });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
