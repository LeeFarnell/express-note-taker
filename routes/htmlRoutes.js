const { Router } = require("express");
const router = Router();

router.get("/notes", getNotes);

module.exports = router;

const getNotes = (req, res) => {
  const filepath = path.join(__dirname, "/db/db.json");
  const notes = fs.readFileSync(filepath, "utf-8");
  res.json(JSON.parse(notes));
};
