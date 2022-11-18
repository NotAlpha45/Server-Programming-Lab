require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const {router} = require("./routes");

const app = express();
const session = require("express-session");

const port = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/public");

app.use(router);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
