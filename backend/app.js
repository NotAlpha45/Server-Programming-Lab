// import express from 'express'
import express from "express";
import profile_router from "./routers/indexRoutes.js";

const port = process.env.PORT || 3000;
const app = express();

// Setting the view engine to ejs and the static folder for images
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.use("/profile", profile_router);

app.listen(port, function () {
  console.log(`Listening at ${port}`);
});
