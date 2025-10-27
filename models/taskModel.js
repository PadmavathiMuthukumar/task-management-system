import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // task must have a title
  },
  description: String,  // details about the task
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"], // limit to 3 valid states
    default: "pending"
  },
  dueDate: {
    type: Date,  // store deadlines
  },
});

export default mongoose.model("Task", taskSchema);
