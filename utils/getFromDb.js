const fs = require("fs");
const path = require("path");

const getFromDb = () => {
  const filePath = path.join(__dirname, "../db/db.json");
  const dbData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(dbData);
};

module.exports = getFromDb;
