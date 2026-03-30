const express = require("express");
const router = express.Router();
const db = require("../config/db");

const generateQR = require("../utils/generateQR");
const generatePDF = require("../utils/generatePDF");

// simple uuid
const uuidv4 = () => {
  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

router.post("/", async (req, res) => {
  const { citizen_id, center_id, dose_number } = req.body;

  try {
    const [dose] = await db.query(
      "INSERT INTO dose_records (citizen_id, dose_number, date_administered, center_id) VALUES (?, ?, NOW(), ?)",
      [citizen_id, dose_number, center_id]
    );

    const certId = uuidv4();

    await db.query(
      "INSERT INTO certificates (citizen_id, dose_record_id, certificate_uuid, issued_at) VALUES (?, ?, ?, NOW())",
      [citizen_id, dose.insertId, certId]
    );

    const verifyUrl = `http://localhost:5000/verify/${certId}`;
    const qrImage = await generateQR(verifyUrl);

    generatePDF(res, certId, qrImage);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating certificate" });
  }
});

module.exports = router;