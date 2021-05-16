const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(cors());

const getNotes = (req, res) => {
  const filepath = path.join(__dirname, "/db/db.json");
  const notes = fs.readFileSync(filepath, "utf-8");
  res.json(JSON.parse(notes));
};

app.get("/api/notes", getNotes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
