const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        center_id,
        DATE(date_administered) AS date,
        COUNT(*) AS count
      FROM dose_records
      GROUP BY center_id, DATE(date_administered)
    `);

    console.log(rows); // DEBUG

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error loading dashboard" });
  }
});
module.exports = router;