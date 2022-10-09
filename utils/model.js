const mongoose = require("mongoose");

const schema = mongoose.Schema({
  nama: String,
  email: String,
  message: String,
});

const model = mongoose.model("Pesan", schema);

module.exports = model;
