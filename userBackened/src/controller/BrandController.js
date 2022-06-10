const express = require("express");
const Brand = require("../model/BrandModel");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const brands = await Brand.create(req.body);
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find().populate("product").lean().exec();
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const brands = await Brand.findById(req.params.id)
      .populate("product")
      .lean()
      .exec();
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const brands = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(brands);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
