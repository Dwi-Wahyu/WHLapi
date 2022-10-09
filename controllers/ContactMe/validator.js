const validator = require("validator");

const validate = (nama, email, message) => {
  var problem = "";

  if (nama.length > 15) {
    problem = `${problem} Name is larger than 15 character,`;
  } else if (nama.length == 0) {
    problem = `${problem} Name is less than 1 character,`;
  }

  if (!validator.isEmail(email)) {
    problem = `${problem} Email isn't valid,`;
  }

  if (message.length > 200) {
    problem = `${problem} Message is larger than 200 character,`;
  } else if (message.length == 0) {
    problem = `${problem} Message is less than 1 character,`;
  }

  if (problem.length == 0) {
    problem = `Succeded`;
  }
  return problem;
};

module.exports = validate;
