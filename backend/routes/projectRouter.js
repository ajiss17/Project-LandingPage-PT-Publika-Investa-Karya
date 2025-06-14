const express = require("express");
const pool = require("../db");
const router = express.Router();

// Ambil semua projects
router.get("/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Tambah project baru
router.post("/projects", async (req, res) => {
  try {
    const { name, description, category, image_url } = req.body;
    const result = await pool.query(
      "INSERT INTO projects (name, description, category, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, category, image_url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
