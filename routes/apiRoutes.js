const { Router } = require("express");
const { getNotes, writeNotes } = require("../controllers/notes");
const router = Router();

router.get("/notes", getNotes);

router.post("/notes", writeNotes);

module.exports = router;
