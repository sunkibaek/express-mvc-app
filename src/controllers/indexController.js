const get = (req, res, next) => {
  res.json({ title: "Express" });
};

module.exports = { get };
