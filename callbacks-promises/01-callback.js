// const names = ["John", "Jane", "Eric"];
// const shortNames = names.filter((name) => {
//   return names.length <= 4;
// });

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    callback(data);
  }, 2000);
};

geocode("Philadelphia", (data) => {
  console.log(data);
});
