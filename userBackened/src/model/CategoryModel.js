const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
   category: { type: String, required: false },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = mongoose.model("category", ProductSchema);

module.exports = product;
