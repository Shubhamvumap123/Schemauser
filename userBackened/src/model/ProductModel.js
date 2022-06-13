const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
    productName: { type: String, required: false },
    productPrice: { type: Number, required: false },
    productquantity: { type: Number, required: false },
    productdate: { type: String, required: false },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      },
    ],
   order: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = mongoose.model("products", ProductSchema);

module.exports = product;
