import Task from "../models/taskModel.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tasks or filter by status
export const getTasks = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task
export const updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Analytics summary
export const getSummary = async (req, res) => {
  try {
    const counts = {
      pending: await Task.countDocuments({ status: "pending" }),
      "in-progress": await Task.countDocuments({ status: "in-progress" }),
      completed: await Task.countDocuments({ status: "completed" })
    };

    const now = new Date();
    const overdueTasks = await Task.find({
      dueDate: { $lt: now },
      status: { $ne: "completed" }
    });

    res.json({
      counts,
      overdueCount: overdueTasks.length,
      overdueTasks
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
