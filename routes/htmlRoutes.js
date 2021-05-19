const { Router } = require("express");
const renderNotesPage = require("../controllers/html");
const router = Router();

router.get("/notes", renderNotesPage);

module.exports = router;
