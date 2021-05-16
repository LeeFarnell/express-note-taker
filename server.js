const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = 4000;

const app = express();

const getNotes = (req, res) => {
  const filepath = path.join(__dirname, "/db/db.json");
  console.log(filepath);
  const notes = fs.readFileSync(filepath, "utf-8");
  console.log(notes);
  res.send("Hello World!");
};

app.get("/api/notes", getNotes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
