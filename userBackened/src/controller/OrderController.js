const express = require("express");
const router = express.Router();
const Order = require("../model/OrderModel");
router.get("/", async (req, res) => {
    
  try {
    const order = await Order.find({ firstuser: "name" })
      .lean()
      .exec()
      .populate("firstuser");
    res.status(200).send(order);
  } catch (error) {
    console.log("error", error);
  }
});

router.post("/create", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    return res.status(201).send(order);
  } catch (error) {
    console.log("errror", error);
  }
});
router.get("/", async (req, res) => {
  try {
 
    const order = await Product.aggregate([
      {
        $match: {
          product: _id,
        },
      },
    ]);
    
    console.log(plist);
    return res.send(order);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).lean().exec();
    return res.status(200).send(order);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id/edit", async (req, res) => {
  try {
    const order = await order.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(order);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id/addresses", async (req, res) => {
  try {
    const order = await order.findById(req.params.id);

    const addresses = order.addresses;

    return res.status(201).send(addresses);
  } catch (error) {
    console.log("error:", error);
  }
});

router.patch("/:id/address/create", async (req, res) => {
  try {
    const order = await order.updateOne(
      { _id: req.params.id },
      { $push: { addresses: req.body } }
    );
    return res.status(200).send(order);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/:id/addresses/:idx/edit", async (req, res) => {
  try {
    const order = await order.findById(req.params.id);

    return res.status(200).send(order);
  } catch (error) {
    console.log("error:", error);
  }
});

module.exports = router;
