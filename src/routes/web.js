// api phuc vu cho server side rendering
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  // không dùng app.get vì bên kia đã khai báo app rồi) // link: https://expressjs.com/en/guide/routing.html
  res.render("sample.ejs");
});
router.get("/thayvo", (req, res) => {
  res.send("hoi thayvo đi");
});

module.exports = router; // export router cho file server.js sử dụng
