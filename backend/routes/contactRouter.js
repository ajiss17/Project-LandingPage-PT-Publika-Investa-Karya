const express = require("express");
const pool = require("../db"); // Koneksi ke PostgreSQL
const router = express.Router();

// Ambil semua pesan dari contact_us
router.get("/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contact_us ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tambah pesan baru ke contact_us
router.post("/contacts", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const result = await pool.query(
      "INSERT INTO contact_us (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
