import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // 👈 this makes the title mandatory
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  }
});

export default mongoose.model("Task", taskSchema);
