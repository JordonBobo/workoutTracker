const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutOutline = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  type: {
    type: String,
    required: "Is it Cardio or Resistance"
  },
  time: {
    type: Number,
    required: "How many minutes did you exercise"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("workout", workoutOutline);

module.exports = Workout;
