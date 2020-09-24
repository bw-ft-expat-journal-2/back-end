const express = require("express");
const router = express.Router();

const Posts = require("./posts-model");

router.get("/", (req, res) => {
  Posts.getPosts()
    .then((posts) => {
      res.status(200).json({ data: posts });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Posts.findById(id)
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

router.post("/:id", (req, res) => {
  const newPost = req.body;
  const {id} = req.params
  console.log(newPost)
  newPost.users_id = id
  Posts.add(newPost)
    .then((post) => {
      console.log(post)
      if (!post.title || !post.contents) {
        res.status(401).json({ message: "please include title and contents" });
      } else {
        res.status(201).json({ data: post });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id;
  if (!updatedInfo.title || !updatedInfo.contents) {
    res
      .status(400)
      .json({ message: "please include title and contents for post" });
  } else {
    Posts.update(id, updatedInfo)
      .then((post) => {
        if (post) {
          res.status(200).json({ data: updatedInfo });
        } else {
          res
            .status(404)
            .json({ message: "the post with this id does not exist" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Posts.remove(id)
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

module.exports = router;
