const model = require("../../utils/model");

const get = (req, res) => {
  const { nama, email, message } = req.body;
  model.find().then((data) => {
    res.status(200).json(data);
  });
};

module.exports = get;
