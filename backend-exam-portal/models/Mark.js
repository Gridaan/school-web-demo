const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
    unique: true // Assuming one mark entry per student for simplicity
  },
  subjects: {
    type: Map,
    of: { type: Number, min: 0, max: 100 },
    required: true
  },
  total: {
    type: Number,
    default: 0
  },
  percentage: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

markSchema.pre('save', function() {
  let total = 0;
  let count = 0;
  
  if (this.subjects) {
    for (const mark of this.subjects.values()) {
      total += mark;
      count++;
    }
  }
  
  this.total = total;
  // Assuming each subject is out of 100
  this.percentage = count > 0 ? (this.total / (count * 100)) * 100 : 0;
});

module.exports = mongoose.model('Mark', markSchema);
