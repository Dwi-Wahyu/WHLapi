require("dotenv").config();

const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

function connectDB() {
  mongoose.connect(url, (err) => {
    if (err) throw err;
    console.log("Berhasil terhubung ke database");
  });
}

module.exports = connectDB;
