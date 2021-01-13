require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ffe1334b39f23e482e562a7")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .catch(console.log);

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5ffe069ba59de6df5928e55c")
  .then(console.log)
  .catch(console.log);
