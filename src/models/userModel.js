const userRepository = require("../repositories/userRepository");

const getAll = () => {
  return userRepository.getAll();
};

module.exports = { getAll };
