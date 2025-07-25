require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/takacare';

const PickupRequestSchema = new mongoose.Schema({
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const PickupRequest = mongoose.model('PickupRequest', PickupRequestSchema);

const CollectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Collector = mongoose.model('Collector', CollectorSchema);

async function seed() {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected for seeding');

    // Clear existing data
    await PickupRequest.deleteMany({});
    await Collector.deleteMany({});

    // Seed PickupRequests
    const pickupRequests = await PickupRequest.insertMany([
      { location: '123 Main St' },
      { location: '456 Elm Ave' },
      { location: '789 Oak Blvd' }
    ]);
    console.log('Seeded PickupRequests:', pickupRequests.length);

    // Seed Collectors
    const collectors = await Collector.insertMany([
      { name: 'John Doe' },
      { name: 'Jane Smith' }
    ]);
    console.log('Seeded Collectors:', collectors.length);

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 