const express = require("express");

const PORT = 4000;

const app = express();

const getNotes = (req, res) => {
  res.send("Hello World!");
};

app.get("/api/notes", getNotes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
