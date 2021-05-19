const { Router } = require("express");
const getNotes = require("../controllers/notes");
const router = Router();

router.get("/api/notes", getNotes);
