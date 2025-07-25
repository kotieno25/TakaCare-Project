// backend/routes/pickup.js
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const PickupRequestSchema = new mongoose.Schema({
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const PickupRequest = mongoose.model('PickupRequest', PickupRequestSchema);

// POST /api/pickup
router.post("/", async (req, res) => {
  const { location } = req.body;
  if (!location) return res.status(400).json({ error: "Location required." });

  try {
    const pickup = await PickupRequest.create({ location });
    res.status(201).json({ message: "Pickup request saved.", pickup });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

// GET /api/pickup
router.get('/', async (req, res) => {
  try {
    const pickups = await PickupRequest.find();
    res.json(pickups);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
