const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: Number,
    desc: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
