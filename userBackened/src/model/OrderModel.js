const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true,
      },
    ],
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const order = mongoose.model("order", OrderSchema);

module.exports = order;
