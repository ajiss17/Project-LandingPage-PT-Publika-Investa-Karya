const express = require("express");
const pool = require("../db"); // Sesuaikan dengan file koneksi db kamu
const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
