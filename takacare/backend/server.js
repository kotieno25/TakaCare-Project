const express = require("express");
const cors = require("cors");
const pickupRoutes = require("./routes/pickup");
const collectorRoutes = require("./routes/collectors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/pickup", pickupRoutes);
app.use("/api/collectors", collectorRoutes);

app.get("/", (req, res) => res.send("TakaCare Backend Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
