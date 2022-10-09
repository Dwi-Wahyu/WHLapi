const model = require("../../utils/model");
const validate = require("./validator");
const validator = require("validator");

const post = (req, res) => {
  const { nama, email, message } = req.body;
  const con = validate(nama, email, message);
  if (con == "Succeded") {
    model
      .create({ nama, email, message })
      .then(() => {
        res.status(200).json({ Success: "Post data success!" });
      })
      .catch((err) => {
        res.status(500).json({ Error: err });
      });
  } else {
    res.status(301).json({ Error: con });
  }
};

module.exports = post;
