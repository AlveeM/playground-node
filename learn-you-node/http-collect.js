const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
  const string = [];
  res.setEncoding("utf8");
  res.on("data", (data) => string.push(data));
  res.on("error", console.error);
  res.on("end", (_) => {
    const finalStr = string.join("");
    console.log(finalStr.length);
    console.log(finalStr);
  });
});
