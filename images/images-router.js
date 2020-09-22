const express = require("express");
const router = express.Router();

const Images = require("./images-router");

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

router.put("/:id", (req, res) => {
  const updatedInfo = req.body;
  const id = req.params.id
  Images.update(updatedInfo)
    .then((image) => {
      res.status(200).json({ data: image });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
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
