const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
      dateTime:{type:Date},

    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: false,
    },

    firstuser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },

    seconduser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

const order = mongoose.model("order", OrderSchema);

module.exports = order;
