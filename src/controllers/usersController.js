const userModel = require("../models/userModel");

const get = (req, res, next) => {
  const users = userModel.getAll();

  res.json(users);
};

module.exports = {
  get,
};
