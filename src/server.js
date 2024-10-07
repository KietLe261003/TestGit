const express = require("express");
const path = require("path");
const app = express();
const slugify = require("slugify");
require("dotenv").config();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
app.set("views", path.join(__dirname, "views"));
//set ejs view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("sample.ejs");
});
app.get("/", (req, res) => {
  res.send("hoi thayvo đi");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
