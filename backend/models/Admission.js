const mongoose = require('mongoose');

const admissionSchema =mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    interestedClass: String,
    message: String,
}, { timestamps: true });

module.exports = mongoose.model("Admission", admissionSchema);