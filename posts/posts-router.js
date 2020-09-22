const express = require("express");
const router = express.Router();

const Posts = require("./posts-model");

router.get("/", (req, res) => {
  Posts.getUsers()
    .then((posts) => {
      res.status(200).json({ data: posts });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  Posts.findById()
    .then((post) => {
      if (!post) {
        res.status(404).json({ message: "post not found" });
      } else {
        res.status(200).json({ data: post });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/:id", (req, res) => {
  const updatedInfo = req.body;
  Posts.update(updatedInfo)
    .then((post) => {
      res.status(200).json({ data: post });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.delete("/:id", (req, res) => {
  Posts.remove()
    .then((post) => {
      if (!post) {
        res.status(404).json({ message: "post not found" });
      } else {
        res.status(200).json({ message: "post successfully deleted" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});
