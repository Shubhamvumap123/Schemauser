const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: String, require: true },
  address: [
    {
      line1: { type: String, require: true },
      line2: { type: String, require: true },
      city: { type: String, require: true },
      contry: { type: String, require: true },
      type: { type: String, require: true },
    },
  ],
});

const User= new mongoose.model("dbschemas", userSchema);

module.exports = User;
