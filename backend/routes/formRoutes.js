const express = require("express");
const router = express.Router();
const { submitAdmission, submitContact } = require("../controllers/formController");

router.post("/admission", submitAdmission);
router.post("/contact", submitContact);

module.exports = router;