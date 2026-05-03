const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const Task = require("../models/Task");
const { protect } = require("../middleware/authMiddleware");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get student by ID
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new student
router.post("/", async (req, res) => {
  try {
    const { name, grade, rollNumber, email } = req.body;

    const studentExists = await Student.findOne({ rollNumber });
    if (studentExists) {
      return res.status(400).json({ message: "Student with this roll number already exists" });
    }

    const student = await Student.create({
      name,
      grade,
      rollNumber,
      email,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update student
router.put("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Also delete associated tasks
    await Task.deleteMany({ studentId: req.params.id });
    await student.deleteOne();

    res.json({ message: "Student removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
