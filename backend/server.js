require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Import router untuk contacts & products
const contactRouter = require("./routes/contactRouter");
const productRouter = require("./routes/productRouter");
const projectRouter = require("./routes/projectRouter");

// Gunakan router yang sudah dibuat
app.use("/api", contactRouter);
app.use("/api", productRouter);
app.use("/api", projectRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
