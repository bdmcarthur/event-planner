const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");
const app = express();
const path = require("path");
require("dotenv").config();
// Route requires
const user = require("./routes/user");
const party = require("./routes/party");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client/build")));

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60 * 60 * 24 * 1000 },
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: true,
    saveUninitialized: false
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
// Starting Server
app.listen(process.env.PORT || 5000);
