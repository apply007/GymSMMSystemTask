const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  trainees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Schedule", ScheduleSchema);
