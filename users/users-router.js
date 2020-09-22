const express = require("express");
const router = express.Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id
  Users.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "user not found" });
      } else {
        res.status(200).json({ data: user });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id
  Users.update(updatedInfo)
    .then((user) => {
      res.status(200).json({ data: user });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id
  Users.remove(id)
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "user not found" });
      } else {
        res.status(200).json({ message: "user successfully deleted" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});


module.exports = router;