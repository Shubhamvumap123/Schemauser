const express = require("express");
const Product = require("../model/ProductModel");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
  
});

router.get("/", async (req, res) => {
  try {
    // const product = await Product.find().lean().exec();
    // return res.status(200).send(product);
    // const product = await Product.aggregate([
    //   {
    //     $match: {
    //       productName: "Rowe LLC",
    //     },
    //   },
    // ]);
    const product = await Product.findOne({ productName: "Sagar" });
    console.log(product)
    return res.send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("categoryId")
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
