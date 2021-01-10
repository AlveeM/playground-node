const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("books.json", bookJSON);

// const dataBuffer = fs.readFileSync("books.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

const testData = JSON.parse(fs.readFileSync("test.json").toString());

(testData.name = "John"), (testData.age = 29);

fs.writeFileSync("test.json", JSON.stringify(testData));
