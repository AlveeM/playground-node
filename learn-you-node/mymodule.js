const fs = require("fs");
const path = require("path");

function filterDirs(dirName, ext, callback) {
  fs.readdir(dirName, (err, dirs) => {
    if (err) return callback(err);
    ext = "." + ext;
    const filteredFiles = dirs.filter((file) => path.extname(file) === ext);
    callback(null, filteredFiles);
  });
}

module.exports = filterDirs;
