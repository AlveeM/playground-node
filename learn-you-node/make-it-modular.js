const mymodule = require("./mymodule.js");

dir = process.argv[2];
ext = process.argv[3];
mymodule(dir, ext, (err, filteredFiles) => {
  if (err) console.error(err);
  filteredFiles.forEach((fileName) => console.log(fileName));
});
