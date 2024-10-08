const express = require("express"); // app express
const path = require("path");
const app = express();
const slugify = require("slugify");
const configViewEngine = require("./config/viewEngine"); // import viewEngine từ bên config
require("dotenv").config();
const port = process.env.PORT || 8888; // use env file for port numbers
const hostname = process.env.HOST_NAME; // hostname
console.log(__dirname);
//config template engine
configViewEngine(app);

app.get("/", (req, res) => {
  res.render("sample.ejs");
});
app.get("/", (req, res) => {
  res.send("hoi thayvo đi");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
