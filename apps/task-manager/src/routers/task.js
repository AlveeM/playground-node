const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err);
  }

  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
});

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    res.status(500).send();
  }

  // Task.find({})
  //   .then((tasks) => {
  //     if (!tasks) return res.status(404).send();
  //     res.send(tasks);
  //   })
  //   .catch((err) => {
  //     res.status(500).send();
  //   });
});

router.get("/tasks/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);
    if (!task) return res.status(404).send();
    res.send(task);
  } catch (err) {
    res.status(500).send();
  }

  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) return res.status(404).send();
  //     res.send(task);
  //   })
  //   .catch((err) => {
  //     res.status(500).send();
  //   });
});

router.patch("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const updatedInfo = req.body;
  const updates = Object.keys(updatedInfo);
  const allowedUpdates = ["description", "completed"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));
  if (!isValid) {
    res.status(400).send({ error: "Invalid upadtes" });
  }

  try {
    const task = await Task.findByIdAndUpdate(id, updatedInfo, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).send("Task not found");
    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(400).send();
    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
