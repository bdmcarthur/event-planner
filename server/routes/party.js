const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Party = require("../database/models/party");

router.post("/add", (req, res, next) => {
  const {
    title,
    description,
    time,
    date,
    address,
    imageUrl,
    guestList
  } = req.body;

  Party.create({
    title,
    description,
    address,
    time,
    date,
    imageUrl,
    guestList,
    user: req.user._id
  })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/getParties", (req, res, next) => {
  Party.find({ user: req.user._id })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
