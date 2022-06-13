const express = require("express");
const LIst = require("../model/ListModel");

const router = express.Router();

router.post("/list", async (req, res) => {
  try {
    const plist = await LIst.create(req.body);
    return res.status(200).send(plist);
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
    const plist = await LIst.findOne();
    console.log(plist);
    return res.send(plist);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const plist = await LIst.findById(req.params.id)
      .populate("listId")
      .lean()
      .exec();
    return res.status(200).send(plist);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const plist = await LIst.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    return res.status(200).send(plist);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;
