const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const connectDB = require("./utils/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB();

const post = require("./controllers/ContactMe/post");
const get = require("./controllers/ContactMe/get");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Berhasil" });
});

app.get("/v1/ContactMe/get/", get);

app.post("/v1/ContactMe/post/", post);

app.listen(8080, () => {
  console.log("terbuka pada port 8080");
});
