const express = require("express");
const router = express.Router();

const Images = require("./images-model");

router.get("/", (req, res) => {
  Images.getImages()
    .then((images) => {
      res.status(200).json({ data: images });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id
  Images.findById(id)
    .then((image) => {
      if (!image) {
        res.status(404).json({ message: "image not found" });
      } else {
        res.status(200).json({ data: image });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {
  const image = req.body;
  Images.add(image)
    .then((image) => {
      if (!image.url || !image.alt) {
        res.status(401).json({ message: "please include title and contents" });
      } else {
        res.status(201).json({ data: image });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.put("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id;
  if (!updatedInfo.url || !updatedInfo.alt) {
    res
      .status(400)
      .json({ message: "please include url and alt for image" });
  } else {
    Images.update(id, updatedInfo)
      .then((image) => {
        if (image) {
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
  const id = req.params.id
  Images.remove(id)
    .then((image) => {
      if (!image) {
        res.status(404).json({ message: "image not found" });
      } else {
        res.status(200).json({ message: "image successfully deleted" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;