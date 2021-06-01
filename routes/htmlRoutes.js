const { Router } = require("express");

const { renderer } = require("../controllers/html");

const router = Router();

router.get("/notes", renderer("notes"));

router.get("/*", renderer("index"));

module.exports = router;
