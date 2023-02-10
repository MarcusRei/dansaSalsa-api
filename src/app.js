require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const courseRoutes = require("./routes/courseRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/bookings", bookingRoutes);
app.use("/api/v1/events", eventRoutes);

const port = process.env.PORT || 5000;
async function run() {
  try {
    app.listen(port);
  } catch (error) {}
}
