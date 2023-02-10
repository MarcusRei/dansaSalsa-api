const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  location: {
    type: {
      venue: String,
      street: String,
      zipCode: Number,
      city: String,
    },
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Event", EventSchema);
