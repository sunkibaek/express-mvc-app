const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json([{ name: "John" }, { name: "Elon" }]);
});

module.exports = router;
