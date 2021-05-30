const { Router } = require("express");

const { getNotes, writeNotes, deleteNotes } = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);

router.post("/notes", writeNotes);

router.delete("/notes/:id", deleteNotes);

module.exports = router;
