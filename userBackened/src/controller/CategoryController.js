const express = require("express");
const Category = require("../model/CategoryModel");

const router = express.Router();

router.post("/category", async (req, res) => {
  try {
    const pcategory = await Category.create(req.body);
    return res.status(200).send(pcategory);
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
    const pcategory = await Category.findOne({ pcategoryName: "Sagar" });
    console.log(pcategory);
    return res.send(pcategory);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pcategory = await Category.findById(req.params.id)
      .populate("categoryId")
      .lean()
      .exec();
    return res.status(200).send(pcategory);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const pcategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(pcategory);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
