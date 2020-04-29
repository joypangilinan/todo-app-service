const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    type: {
      type: String,
      enum: ["work", "personal"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
