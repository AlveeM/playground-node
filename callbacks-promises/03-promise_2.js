const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

add(1, 2)
  .then((sum) => add(sum, 2))
  .then(console.log)
  .catch(console.log);
