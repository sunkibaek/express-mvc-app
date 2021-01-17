const get = (req, res, next) => {
  res.json([{ name: "John" }, { name: "Elon" }]);
};

module.exports = {
  get,
};
