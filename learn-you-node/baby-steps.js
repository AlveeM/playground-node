function sumStrDigits(arr) {
  return arr.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
}

console.log(sumStrDigits(process.argv.slice(2)));
