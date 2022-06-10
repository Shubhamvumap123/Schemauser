const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
   
    productName: { type: String, required: true },
    productBrand: { type: String, required: false },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = mongoose.model("ecommerceProduct", ProductSchema);

module.exports = product;
