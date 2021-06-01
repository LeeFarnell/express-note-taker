const path = require("path");

const staticFilePath = (fileName) =>
  path.join(__dirname, "../public", `/${fileName}.html`);

module.exports = staticFilePath;
