// backend/routes/collectors.js
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const CollectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Collector = mongoose.model('Collector', CollectorSchema);

// POST /api/collectors
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name required." });

  try {
    const collector = await Collector.create({ name });
    res.status(201).json({ message: "Collector registered.", collector });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

// GET /api/collectors
router.get('/', async (req, res) => {
  try {
    const collectors = await Collector.find();
    res.json(collectors);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
