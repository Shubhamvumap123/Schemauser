const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
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
const brand = mongoose.model("brand", BrandSchema);

module.exports = brand;
