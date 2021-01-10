const http = require("http");
const bl = require("bl");
const results = [];
let count = 0;
const finalCount = 3;

function printRes() {
  results.forEach((data) => console.log(data));
}

function get(url, idx) {
  http.get(url, function (res) {
    res.pipe(
      bl(function (err, data) {
        if (err) return console.error(err);
        results[idx] = data.toString();
        count++;

        if (count === finalCount) printRes();
      })
    );
  });
}

process.argv.slice(2).forEach((url, idx) => get(url, idx));

// Brute Force!!!
// const http = require("http");
// const url1 = process.argv[2];
// const url2 = process.argv[3];
// const url3 = process.argv[4];

// const results = [];
// let string = [];
// let string2 = [];
// let string3 = [];

// http.get(url1, (res) => {
//   res.setEncoding("utf8");
//   res.on("data", (data) => string.push(data));
//   res.on("end", (_) => {
//     // results.push(string.join(""));
//     console.log(string.join(""));
//     http.get(url2, (res) => {
//       res.setEncoding("utf8");
//       res.on("data", (data) => string2.push(data));
//       res.on("end", (_) => {
//         // results.push(string2.join(""));
//         console.log(string2.join(""));
//         http.get(url3, (res) => {
//           res.setEncoding("utf8");
//           res.on("data", (data) => string3.push(data));
//           res.on("end", (_) => {
//             // results.push(string3.join(""));
//             console.log(string3.join(""));
//           });
//         });
//       });
//     });
//   });
// });
