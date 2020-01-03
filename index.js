const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const expressSession = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
require("dotenv").config();
// Route requires
const user = require("./routes/user");
const party = require("./routes/party");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "client/build")));

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: true,
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60
    })
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Routes
app.use("/user", user);
app.use("/party", party);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join("build", "index.html"));
//   });
// }

// Starting Server
app.listen(process.env.PORT || 5000);
