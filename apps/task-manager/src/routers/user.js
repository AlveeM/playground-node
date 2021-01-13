const express = require("express");
const User = require("../models/user");
const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }

  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch(() => {
  //     res.status(500).send();
  //   });
});

router.get("/users/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send();
  }

  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send();
  //     }
  //     res.send(user);
  //   })
  //   .catch((err) => {
  //     res.status(500).send();
  //   });
});

router.patch("/users/:id", async (req, res) => {
  const updatedInfo = req.body;
  const updates = Object.keys(updatedInfo);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOpeartion = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  const id = req.params.id;

  if (!isValidOpeartion) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, updatedInfo, {
      new: true,
      runValidators: true,
    });
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(400).send();
    res.send(user);
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
