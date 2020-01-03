const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/signup", (req, res) => {
  const { username, password, name } = req.body;

  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
        name: name
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        console.log("here it iiiissss", req.user);
        res.json(savedUser);
        res.send(req.user);
      });
    }
  });
});

router.post(
  "/login",
  function(req, res, next) {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    var userInfo = {
      user: req.user
    };
    res.send(req.user);
  }
);

router.get("/", (req, res, next) => {
  if (req.user) {
  } else {
    res.json({ user: null });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
