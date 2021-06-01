const staticFilePath = require("../utils/staticFile");

const renderer = (page) => (req, res) => {
  const filePath = staticFilePath(page);

  res.sendFile(filePath);
};

module.exports = { renderer };
