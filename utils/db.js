require("dotenv").config();

const mongoose = require("mongoose");
// const url = process.env.MONGODB_URI;
const url =
  "mongodb+srv://DwiWahyu:DeadlyMamba89@cluster0.jpu1d.mongodb.net/?retryWrites=true&w=majority";

function connectDB() {
  mongoose.connect(url, (err) => {
    if (err) throw err;
    console.log("Berhasil terhubung ke database");
  });
}

module.exports = connectDB;
