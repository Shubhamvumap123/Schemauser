const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required:false },
    productName: { type: String, required: false },
    productPrice: { type: Number, required: false },
    productquantity: { type: Number, required: false },
    productdate:{type: String, required: false}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = mongoose.model("product", ProductSchema);

module.exports = product;
