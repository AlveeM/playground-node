const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([2, 3, 5]);
    // reject("Error!");
  }, 1000);
});

doWorkPromise
  .then((result) => {
    console.log({ result });
  })
  .catch((error) => console.log({ error }));
