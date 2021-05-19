const { v4: uuidv4 } = require("uuid");

const getFromDb = require("../utils/getFromDb");
const writeToDb = require("../utils/writeToDb");

const getNotes = (req, res) => {
  const notes = getFromDb();

  res.json(notes);
};

const writeNotes = (req, res) => {
  const newNote = { ...req.body, id: uuidv4() };

  const notes = getFromDb();
  const data = [...notes, newNote];

  writeToDb(data);

  res.json(data);
};

module.exports = { getNotes, writeNotes };
