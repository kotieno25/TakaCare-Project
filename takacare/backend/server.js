// backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pickupRoutes = require("./routes/pickup");
const collectorRoutes = require("./routes/collector");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/request-pickup", pickupRoutes);
app.use("/api/join-collector", collectorRoutes);

app.get("/", (req, res) => res.send("TakaCare API Running ✅"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
