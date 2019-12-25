const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const Party = require("../database/models/party");

const generateRandomCode = (() => {
  const USABLE_CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

  return length => {
    return new Array(length)
      .fill(null)
      .map(() => {
        return USABLE_CHARACTERS[
          Math.floor(Math.random() * USABLE_CHARACTERS.length)
        ];
      })
      .join("");
  };
})();

router.post("/add", (req, res, next) => {
  const {
    title,
    description,
    time,
    date,
    address,
    imageUrl,
    guestList,
    design
  } = req.body;

  Party.create({
    title,
    description,
    address,
    time,
    date,
    imageUrl,
    guestList,
    design,
    user: req.user._id,
    partyCode: generateRandomCode(6)
  })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/getParties", (req, res, next) => {
  Party.find({ user: req.user })
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

router.get("/loadParty/:id", (req, res, next) => {
  Party.find({ _id: req.params.id })
    .populate("user")
    .then(plan => {
      res.json({ type: "success", data: { plan } });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
