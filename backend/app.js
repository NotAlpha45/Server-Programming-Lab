import express from "express";
import router from "./routers/router.js";

const app = express();
const port = process.env.port || 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);

app.listen(port, function () {
  console.log(`Listening at ${port}`);
});
