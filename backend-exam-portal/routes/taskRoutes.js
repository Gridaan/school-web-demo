const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { protect } = require('../middleware/authMiddleware');

// Get all tasks
router.get('/', protect, async (req, res) => {
  try {
    const tasks = await Task.find().populate('studentId', 'name rollNumber grade').sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Assign new task
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, studentId, dueDate } = req.body;
    const task = await Task.create({
      title, description, studentId, dueDate
    });
    
    const populatedTask = await Task.findById(task._id).populate('studentId', 'name rollNumber grade');
    res.status(201).json(populatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update task status (Mark as completed)
router.put('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    const { status } = req.body;
    task.status = status || task.status;
    
    await task.save();
    
    const populatedTask = await Task.findById(task._id).populate('studentId', 'name rollNumber grade');
    res.json(populatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete task
router.delete('/:id', protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
