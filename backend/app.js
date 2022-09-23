import express from "express";
import router from "./routers/router.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT || 3000;
const db_url =
  process.env.DATABASE_URL ||
  "mongodb+srv://maheen:maheen123@cluster0.uoc1c.mongodb.net/book_database";

mongoose
  .connect(db_url, {
    useNewUrlParser: "true",
  })
  .then(function () {
    console.log("Connection successful");
  })
  .catch(function (err) {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/", router);

app.listen(port, function () {
  console.log(`Running at http://localhost:${port}`);
});
