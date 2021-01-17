const database = require("../services/database");

const getAll = () => {
  return database.sql("SELECT * FROM users");
};

module.exports = { getAll };
