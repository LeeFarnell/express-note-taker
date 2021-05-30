const staticFilePath = require("../utils/staticFile");

const renderNotesPage = (req, res) => {
  const filePath = staticFilePath("notes");

  res.sendFile(filePath);
};

const renderIndexPage = (req, res) => {
  const filePath = staticFilePath("index");

  res.sendFile(filePath);
};

module.exports = { renderNotesPage, renderIndexPage };
