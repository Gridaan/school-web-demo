const Admission = require("../models/Admission");
const Contact = require("../models/Contact");

exports.submitAdmission = async (req, res) => {
    try {
        const data = await Admission.create(req.body);
        res.json({ message: "Admission enquiry submitted", data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.submitContact = async (req, res) => {
    try {
        const data = await Contact.create(req.body);
        res.json({ message: "Message sent", data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};