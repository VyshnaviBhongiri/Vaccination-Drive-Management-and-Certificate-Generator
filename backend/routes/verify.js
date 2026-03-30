const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query(
      "SELECT * FROM certificates WHERE certificate_uuid=?",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Invalid Certificate" });
    }

    // ✅ THIS IS CRITICAL
    return res.json({
      message: "Valid Vaccination Certificate"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;