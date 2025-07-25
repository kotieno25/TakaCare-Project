// backend/routes/collectors.js
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// POST /api/collectors
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required." });

  try {
    const collector = await prisma.collector.create({
      data: {
        name,
      },
    });
    res.status(201).json({ message: "Collector registered.", collector });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
