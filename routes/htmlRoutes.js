const { Router } = require("express");
const renderNotesPage = require("../controllers/html");
const router = Router();

router.get("/notes", renderNotesPage);

module.exports = router;

// const getNotes = (req, res) => {
//   const filepath = path.join(__dirname, "/db/db.json");
//   const notes = fs.readFileSync(filepath, "utf-8");
//   res.json(JSON.parse(notes));
// };
