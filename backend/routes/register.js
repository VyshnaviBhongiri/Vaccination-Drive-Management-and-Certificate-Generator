const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  const { name, aadhaar, dob, center_id, date } = req.body;

  try {
    // check if already exists
    const [existing] = await db.query(
      "SELECT * FROM citizens WHERE aadhaar_number=?",
      [aadhaar]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Aadhaar already registered" });
    }

    // insert citizen
    const [citizen] = await db.query(
      "INSERT INTO citizens (name, aadhaar_number, dob) VALUES (?, ?, ?)",
      [name, aadhaar, dob]
    );

    // create appointment
    await db.query(
      "INSERT INTO appointments (citizen_id, center_id, date, status) VALUES (?, ?, ?, 'booked')",
      [citizen.insertId, center_id, date]
    );

    res.json({ message: "Registration successful" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;