const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date
});

module.exports = mongoose.model("Order", orderSchema);