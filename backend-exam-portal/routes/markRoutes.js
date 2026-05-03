const express = require('express');
const router = express.Router();
const Mark = require('../models/Mark');
const { protect } = require('../middleware/authMiddleware');

// Add marks for a student
router.post('/', async (req, res) => {
  try {
    const { studentId, subjects } = req.body;
    
    // Check if marks already exist for this student
    let mark = await Mark.findOne({ student: studentId });
    if (mark) {
      return res.status(400).json({ message: 'Marks already exist for this student' });
    }

    mark = new Mark({
      student: studentId,
      subjects
    });

    await mark.save();
    res.status(201).json(mark);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all students marks
router.get('/', protect, async (req, res) => {
  try {
    const marks = await Mark.find().populate('student', 'name rollNumber grade');
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get marks by student ID
router.get('/student/:studentId', async (req, res) => {
  try {
    const mark = await Mark.findOne({ student: req.params.studentId }).populate('student', 'name rollNumber grade');
    if (!mark) {
      return res.status(404).json({ message: 'Marks not found for this student' });
    }
    res.json(mark);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update marks for a student
router.put('/:id', async (req, res) => {
  try {
    const { subjects } = req.body;
    let mark = await Mark.findById(req.params.id);
    
    if (!mark) {
      return res.status(404).json({ message: 'Mark not found' });
    }

    mark.subjects = subjects;
    // The pre-save hook will recalculate total and percentage
    await mark.save();
    
    res.json(mark);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
