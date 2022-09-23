import express from "express";
import router from "./routers/router.js";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const db_url =
  process.env.DATABASE_URL ||
  "mongodb+srv://maheen:maheen123@cluster0.uoc1c.mongodb.net/test";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

app.listen(port, function () {
  console.log(`Running at http://localhost:${port}`);
});
