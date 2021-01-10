const fs = require("fs");
const path = require("path");
const dir = process.argv[2];
const ext = `.${process.argv[3]}`;

fs.readdir(dir, (err, dirs) => {
  if (err) console.log(err);
  const filteredDirs = dirs.filter((dir) => path.extname(dir) === ext);
  filteredDirs.forEach((fileName) => console.log(fileName));
});
