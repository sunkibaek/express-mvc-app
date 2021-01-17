const config = require("./config");

const sql = (_query) => {
  console.log(`Using DB HOST: ${config.dbHost}`);
  return [{ name: "John" }, { name: "Elon" }];
};

module.exports = { sql };
