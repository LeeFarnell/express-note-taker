const staticFilePath = require("../utils/staticFile");

const renderNotesPage = (req, res) => {
  const filePath = staticFilePath("notes");

  res.sendFile(filePath);
};

module.exports = renderNotesPage;
