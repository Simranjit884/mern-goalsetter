const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please enter the text"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
