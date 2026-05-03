const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  rollNumber: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
