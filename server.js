const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/", htmlRoutes);
// app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
