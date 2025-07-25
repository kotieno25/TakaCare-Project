require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pickupRoutes = require("./routes/pickup");
const collectorRoutes = require("./routes/collectors");
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/takacare';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use("/api/pickup", pickupRoutes);
app.use("/api/collectors", collectorRoutes);

app.get("/", (req, res) => res.send("TakaCare Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
