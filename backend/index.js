require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const passport = require("passport");
const session = require("express-session");
const UserDetails = require("./models/userDetails");

const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;

const databaseURL = process.env.DATABASE_URL;

mongoose
  .connect(databaseURL)
  .then(() => {
    console.log("Database connected!");
  })
  .catch(() => {
    console.log("Could not connect to database!");
  });

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(UserDetails.createStrategy());
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

// bcrypt
//   .hash("admin", 10)
//   .then((result) => {
//     UserDetails.register({ username: "admin", active: false }, "admin");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// UserDetails.register({username:'admin', active: false}, 'admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
