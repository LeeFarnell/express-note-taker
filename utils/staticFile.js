const path = require("path");

const staticFilePath = (fileName) => {
  const filePath = path.join(__dirname, "../public", `/${fileName}.html`);
  return filePath;
};

module.exports = staticFilePath;
