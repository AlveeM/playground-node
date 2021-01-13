require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5ffe11f3baf876e40a5bf106", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .catch(console.log);

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user, count };
};

updateAgeAndCount("5ffe11f3baf876e40a5bf106", 2)
  .then(console.log)
  .catch(console.log);
